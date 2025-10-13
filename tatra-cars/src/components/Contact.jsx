import React from 'react';

const Contact = () => {
  const submitHandler = (e) =>{
   e.preventDefault();
  }
  return (
    <div className="w-100">
      {/* Hero Banner */}
      <div className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Contact Us</h1>
          <p className="lead">Have questions? We're happy to help you anytime.</p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {/* Contact Form */}
            <div className="col-12 col-lg-6">
              <div className="card border-0 shadow-sm h-100 rounded-4 p-4">
                <h3 className="text-primary fw-bold mb-4">Send a Message</h3>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input type="text" className="form-control" id="name" placeholder="John Doe" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="email" placeholder="john@example.com" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input type="text" className="form-control" id="subject" placeholder="Subject of your message" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="4" placeholder="Write your message here..."></textarea>
                  </div>
                  <button type="submit" onClick={submitHandler} className="btn btn-primary w-100 fw-semibold rounded-pill">Submit</button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-12 col-lg-6">
              <div className="card border-0 shadow-sm h-100 rounded-4 p-4 bg-white">
                <h3 className="text-primary fw-bold mb-4">Contact Information</h3>
                <p className="text-muted">Reach out to us through any of the following channels.</p>

                <ul className="list-unstyled mt-4">
                  <li className="mb-4 d-flex align-items-start">
                    <i className="bi bi-geo-alt-fill fs-4 text-primary me-3"></i>
                    <div>
                      <h6 className="fw-bold mb-1">Address</h6>
                      <p className="mb-0 text-muted">123 Car Street, Auto City, CA 90000</p>
                    </div>
                  </li>
                  <li className="mb-4 d-flex align-items-start">
                    <i className="bi bi-telephone-fill fs-4 text-primary me-3"></i>
                    <div>
                      <h6 className="fw-bold mb-1">Phone</h6>
                      <p className="mb-0 text-muted">(123) 456-7890</p>
                    </div>
                  </li>
                  <li className="mb-4 d-flex align-items-start">
                    <i className="bi bi-envelope-fill fs-4 text-primary me-3"></i>
                    <div>
                      <h6 className="fw-bold mb-1">Email</h6>
                      <p className="mb-0 text-muted">support@cardealer.com</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-4">
                  <h6 className="fw-bold mb-2">Follow Us</h6>
                  <a href="#" className="text-dark fs-4 me-3"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="text-dark fs-4 me-3"><i className="bi bi-twitter-x"></i></a>
                  <a href="#" className="text-dark fs-4"><i className="bi bi-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
