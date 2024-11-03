import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
      <div className="d-flex justify-content-center align-items-center w-100 h-200 flex-column" style={{height:'100vh'}}>
        <h1 style={{fontSize:35}}>404</h1>
        <p className="mb-4">Page Not Found</p>
        <img src="assets/images/not-found.svg"  style={{height:"200px"}}  className="mb-4"/>
        <Link className="btn btn-dark" to="/"><i class="fa fa-arrow-left me-2"></i>Back to Home</Link>
      </div>
    );
  }
  
  export default NotFound;
  