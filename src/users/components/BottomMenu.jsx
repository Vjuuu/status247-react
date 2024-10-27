import React from "react";

const BottomMenu = () => {
  return (
    <nav
      className="navbar fixed-bottom navbar-light"
      style={{ backgroundColor: "#1C1C1E" }}
    >
      <div className="container-fluid justify-content-around">
        <a
          className="nav-link d-flex flex-column align-items-center"
          href="/mobile-layout/"
        >
          <i className="fas fa-home mb-1"></i>
          <span className="small">Home</span>
        </a>
        <a className="nav-link d-flex flex-column align-items-center" href="#">
          <i className="fas fa-search mb-1"></i>
          <span className="small">Search</span>
        </a>
        <a className="nav-link d-flex flex-column align-items-center" href="#">
          <i className="fas fa-plus-circle mb-1"></i>
          <span className="small">Create</span>
        </a>
        <a className="nav-link d-flex flex-column align-items-center" href="#">
          <i className="fas fa-heart mb-1"></i>
          <span className="small">Favorites</span>
        </a>
        <a className="nav-link d-flex flex-column align-items-center" href="#">
          <i className="fas fa-user mb-1"></i>
          <span className="small">Profile</span>
        </a>
      </div>
    </nav>
  );
};

export default BottomMenu;
