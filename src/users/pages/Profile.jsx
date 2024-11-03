import React, { useState, useEffect } from 'react';

const Profile = () => {
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

    // Update fields in the businessInfo object
    const handleChange = (e) => {
      const { name, value } = e.target;
      setBusinessInfo((prevInfo) => ({
        ...prevInfo,
        [name]: value,
      }));
    };
  
    // Handle image upload and convert it to a base64 string
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setBusinessInfo((prevInfo) => ({
            ...prevInfo,
            logo: reader.result, // Base64 string of the image
          }));
        };
        reader.readAsDataURL(file);
      }
    };
  
    // Save the data to localStorage on form submission
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent form from refreshing the page
      localStorage.setItem('businessInfo', JSON.stringify(businessInfo));
      alert("Business information saved!");
    };

  return (
    <div className="simple-page-container">
       <h4>Profile</h4>

       <form onSubmit={handleSubmit}>
         {/* Logo Image Preview */}
         {businessInfo.logo && (
          <img src={businessInfo.logo} alt="Business Logo" style={{ width: '100px', height: '100px' }} />
        )}
       <div className="form-group mb-4">
          <label>Logo</label>
          <input type="file" accept="image/*" onChange={handleImageChange} className="form-control form-control-dark" />
       </div>
       <div className="form-group mb-4">
          <label>Business Name</label>
          <input type="text" name="name"   value={businessInfo.name} onChange={handleChange} className="form-control form-control-dark"  />
       </div>
       <div className="form-group mb-4">
          <label>Mobile</label>
          <input type="text" name="mobile" value={businessInfo.mobile} onChange={handleChange}  className="form-control form-control-dark" />
       </div>
       <div className="form-group mb-4">
          <label>Address</label>
          <textarea name="address" id="address"  value={businessInfo.address} onChange={handleChange} className="form-control form-control-dark"></textarea>
       </div>
       <button type="submit" className="btn btn-primary w-100">Submit</button>
       </form>
    </div>
  )
}

export default Profile