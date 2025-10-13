import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer className="bgColor text-white pt-5 pb-4 mt-auto">
      <div className="container-fluid text-center text-md-start">
        <div className="row text-center text-md-start g-4">

          {/* Company Info */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-white text-uppercase">tatra</h5>
            <p className="text-muted">
              Your one-stop shop for new and pre-owned cars. We offer a wide selection of quality vehicles, expert advice, and a hassle-free buying experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-light">Quick Links</h5>
            <p>
              <Link to="/cars" className="text-white text-decoration-none text-muted">Browse Inventory</Link>
            </p>
            <p>
              <Link to="/about" className="text-white text-decoration-none text-muted">About Us</Link>
            </p>
            <p>
              <Link to="/contact" className="text-white text-decoration-none text-muted">Contact Us</Link>
            </p>
            <p>
              <Link href="*" className="text-white text-decoration-none text-muted">FAQs</Link>
            </p>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-light">Contact Info</h5>
            <p className="text-muted">
              <i className="bi bi-geo-alt-fill me-3"></i> 456 Auto Drive,  USA 54321
            </p>
            <p className="text-muted">
              <i className="bi bi-envelope-fill me-3"></i> contact@cardealership.com
            </p>
            <p className="text-muted">
              <i className="bi bi-telephone-fill me-3"></i> +1 (555) 123-4567
            </p>
            <p className="text-muted">
              <i className="bi bi-info-circle-fill me-3"></i> Mon-Sat: 9am - 7pm
            </p>
          </div>

          {/* Newsletter Subscription and Socials */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-light">Stay Connected</h5>
            <p className="text-muted">Subscribe to our newsletter for the latest deals and news.</p>
            <form>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Your email address" aria-label="Recipient's email" aria-describedby="button-addon2" />
                <button className="btn btn-dark" type="button" id="button-addon2">Subscribe</button>
              </div>
            </form>
            <div className="d-flex justify-content-center justify-content-md-start mt-4">
              <a href="#" className="text-white me-4"><i className="bi bi-facebook fs-4 icons"></i></a>
              <a href="#" className="text-white me-4"><i className="bi bi-twitter fs-4"></i></a>
              <a href="#" className="text-white me-4"><i className="bi bi-instagram fs-4"></i></a>
              <a href="#" className="text-white me-4"><i className="bi bi-linkedin fs-4"></i></a>
              <a href="#" className="text-white"><i className="bi bi-youtube fs-4"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid text-center mt-5">
        <hr className="my-3 text-white" />
        <p className="mb-0 text-muted">&copy; {new Date().getFullYear()} CarDealership. All rights reserved.</p>
      </div>
    </footer>

    </>
  )
}

export default Footer