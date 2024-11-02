import React from "react";
import { Link } from "react-router-dom";
const BottomMenu = () => {
  return (
    <nav
      className="navbar fixed-bottom navbar-light"
      style={{ backgroundColor: "#1C1C1E" }}
    >
      <div className="container-fluid justify-content-around">
      <Link
          className="nav-link d-flex flex-column align-items-center"
          to="/"
        >
          <i className="fas fa-home mb-1"></i>
          <span className="small">Home</span>
          </Link>
        <Link className="nav-link d-flex flex-column align-items-center" to="/categories">
          <i className="fa-solid fa-layer-group mb-1"></i>
          <span className="small">Category</span>
        </Link>
        <Link className="nav-link d-flex flex-column align-items-center" to="/profile">
          <i className="fas fa-user mb-1"></i>
          <span className="small">Profile</span>
        </Link>
        <Link className="nav-link d-flex flex-column align-items-center" to="/subcription">
          <i className="fa-solid fa-crown mb-1"></i>
          <span className="small">Pro</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomMenu;
