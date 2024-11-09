import './Template_preview.css';
import domtoimage from 'dom-to-image';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function Template_preview() {
    const { id } = useParams();
    console.log(id)
    const [templates, setTemplates] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const api_base_url = `http://localhost/poster-app/`;

    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`${api_base_url}api/banner/show/${id}`, {
                    headers: { 'X-API-KEY': 'api-status-247-get-data' }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setTemplates(data);
                console.log(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTemplates();
    }, [id]);

    const [businessInfo, setBusinessInfo] = useState({
        logo: '', // Base64 string for the image
        name: '',
        mobile: '',
        address: '',
    });

    useEffect(() => {
        const savedInfo = localStorage.getItem('businessInfo');
        if (savedInfo) {
            setBusinessInfo(JSON.parse(savedInfo));
        }
    }, []);

    const exportImage = async () => {
        await document.fonts.ready;
        const node = document.getElementById('capture');
        domtoimage.toPng(node)
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.href = dataUrl;
                link.download = 'exported-image.png';
                link.click();
            })
            .catch((error) => {
                console.error('Export failed:', error);
            });
    };

    
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <header className="p-2 d-flex align-items-center justify-content-between border-bottom">
                <Link to='/' className="btn btn--link text-white">
                    <i className="fa-solid fa-arrow-left-long" style={{ fontSize: 20 }}></i>
                </Link>
                <button className="btn btn-primary" onClick={exportImage}>
                    <i className="bi bi-download me-1"></i> Download
                </button>
            </header>
            <div className="banner-wrapper d-flex justify-content-center align-items-center">
                <div className="banner-preview" id="capture">
                    <img src={`${api_base_url}assets/templates/${templates[0].template_img}`} alt="" />
                    {businessInfo && (
                        <div className="banner-footer text-center p-2 bg-white text-dark">
                            <div className="row">
                                <div className="col-12">
                                    <h6 className="text-center">{businessInfo.name}</h6>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="mb-0 fs-11"><i className="fa-solid fa-phone me-1"></i>{businessInfo.mobile}</p>
                                        <p className="mb-0 fs-11"><i className="fa-solid fa-location-dot me-1"></i>{businessInfo.address}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Template_preview;
