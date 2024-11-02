import React from 'react';
import { useState , useEffect } from 'react';

const Category = () => {
  
    const [templates, setTemplates] = useState([]);
    const [error, setError] = useState(null);
   
    const api_base_url = 'http://localhost/poster-app/';
    useEffect(() => {
      
      const fetchTemplates = async () => {
          try {
              const response = await fetch(api_base_url+'api/banner', {
                  headers: {
                      'X-API-KEY': 'api-status-247-get-data'
                  }
              });
  
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
  
              const data = await response.json();
              setTemplates(data);
              console.log(data);
          } catch (error) {
              setError(error.message);
          }
      };
  
      fetchTemplates();
  }, []);
  

    if (error) {
        return <div>Error: {error}</div>;
    }

  return (
    <div className="simple-page-container">
        <h1>Templates</h1>
             <div className="row">
                {templates.map((template) => (
                    <div className="col-6 col-md-4 col-lg-3">
                      <div className="card mb-4">
                      <img src={`${api_base_url}assets/templates/${template.template_img}`} alt="poster" className="card-img-top btn-poster" />
                      </div>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Category