import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar({ title = "title", about = "Features", mode, toggleState }) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${mode}`}
      style={{ backgroundColor: mode === 'dark' ? '#28597e' : '#d9d9d9', color: mode==='dark'? `white`:`rgb(97, 97, 208) `}}
    >
      <div className="container-fluid">
        <Link className="navbar-brand ms-3" to="/">
          {title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {about}
              </Link>
            </li>
          </ul>
          <div
            className="bg-primary rounded mx-2"
            style={{ height: "25px", width: "25px" }}
            onClick={() => toggleState("primary")}
          ></div>
          <div
            className="bg-warning rounded mx-2"
            style={{ height: "25px", width: "25px" }}
            onClick={() => toggleState("warning")}
          ></div>
          <div
            className="bg-danger rounded mx-2"
            style={{ height: "25px", width: "25px" }}
            onClick={() => toggleState("danger")}
          ></div>
          <div
            className="bg-success rounded mx-2 me-4"
            style={{ height: "25px", width: "25px" }}
            onClick={() => toggleState("success")}
          ></div>
          <div
            className={`icon d-flex align-items-center me-3 ${
              mode === "dark" ? "text-light" : "text-dark"
            }`}
            role="button"
            onClick={() => toggleState(null)} // Toggle dark/light mode
          >
            <i
              className={`fa-solid fa-moon size ${
                mode === "light" ? "hidden" : ""
              }`}
            ></i>
            <i
              className={`material-symbols-outlined ${
                mode === "dark" ? "hidden" : ""
              }`}
            >
              light_mode
            </i>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  mode: PropTypes.string.isRequired,
  toggleState: PropTypes.func.isRequired,
};

export default Navbar;
