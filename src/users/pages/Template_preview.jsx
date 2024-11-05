import React from 'react';
import './Template_preview.css';
import domtoimage from 'dom-to-image';
import { Link } from 'react-router-dom';
import { useState , useEffect } from 'react';
function Template_preview(){


  
        const [businessInfo, setBusinessInfo] = useState({
          logo: '', // Base64 string for the image
          name: '',
          mobile: '',
          address: '',
        });
      
        const [isReady, setIsReady] = useState(false); 

        useEffect(() => {
          const savedInfo = localStorage.getItem('businessInfo');
          if (savedInfo) {
            setBusinessInfo(JSON.parse(savedInfo));
          }
        }, []);

        console.log(businessInfo)

        const exportImage = async () => {
            // Wait for all fonts to load
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

    return(<div>
        <header className="p-2 d-flex align-items-center justify-content-between  border-bottom">
            <Link to='/' className="btn btn--link text-white"><i class="fa-solid fa-arrow-left-long" style={{fontSize:20}}></i></Link>
            <button className="btn btn-primary" onClick={exportImage}><i class="bi bi-download me-1"></i> Download</button>
        </header>
        <div className="banner-wrapper d-flex justify-content-center align-items-center">
            <div className="banner-preview" id="capture">
                <img src="assets/posters/gandhiJayanti/2.png" alt="" />
                <div className="banner-footer text-center p-2 bg-white text-dark">
                    <div className="row">
                        <div className="col-12">
                            <h6 className="text-center">{businessInfo.name}</h6>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="mb-0 fs-11"><i class="fa-solid fa-phone me-1"></i>{businessInfo.mobile}</p>
                                <p className="mb-0 fs-11"><i class="fa-solid fa-location-dot me-1"></i>{businessInfo.address}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>)
}

export default Template_preview