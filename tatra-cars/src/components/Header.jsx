import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
 
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-primary text-uppercase ms-5" to="/">Tatra</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/cars">Cars</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-primary rounded-pill me-5 px-3 ms-lg-2 fw-bold" to="/contact  ">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
 
    </>
  )
}

export default Header