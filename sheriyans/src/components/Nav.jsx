import { Link } from "react-router-dom";
import React, { useState } from "react";
import Request from "./Request";

const Nav = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center ms-5" to="/">
            <img
              src="https://ik.imagekit.io/sheryians/light-logo_lNzGXRRlQ.png"
              alt="Logo"
              width={35}
              height={45}
              className="me-2"
            />
            <span>
              Sheriyans <br />
              Coding School
            </span>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4 align-items-center">
              <li className="nav-item">
                <Link className="nav-link active fs-5" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-5" to="/Courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-5" to="/about">
                  <span className="text-danger">Trusted-Partner</span>
                </Link>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link active fs-5"
                  style={{ cursor: "pointer" }}
                  onClick={handleOpenModal}
                >
                  Request Callback
                </span>
              </li>
            </ul>
            <a href="https://www.sheryians.com/signin">
              <button className="btn button ms-4 me-5 px-4 fs-5 py-1">
                Sign In
              </button>
            </a>
          </div>
        </div>
      </nav>

      
      <Request show={showModal} handleClose={handleCloseModal} />
    </>
  );
};

export default Nav;
