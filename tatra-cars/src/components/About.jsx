import React from "react";

const About = () => {
  return (
    <div>
      <div className="bg-primary text-white py-5">
        <div className="container-fluid text-center">
          <h1 className="display-3 fw-bold">Our Story & Mission</h1>
          <p className="lead mt-3">
            At CarDealership, we're dedicated to helping you find the perfect
            vehicle for your journey.
          </p>
        </div>
      </div>
      <div className="container-fluid py-5 bg-light">
        <div className="container-fluid">
          <h2 className="text-center fw-bold mb-5">Why Choose Us?</h2>
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-4 p-4 cards">
                <i className="bi bi-star-fill text-warning fs-1 mb-3"></i>
                <h4 className="fw-bold">Quality & Trust</h4>
                <p className="text-muted">
                  Every vehicle in our inventory is thoroughly inspected to
                  ensure the highest standards of quality and reliability.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-4 p-4 cards">
                <i className="bi bi-shield-check text-success fs-1 mb-3"></i>
                <h4 className="fw-bold">Transparent Pricing</h4>
                <p className="text-muted">
                  We believe in honest and straightforward pricing with no
                  hidden fees or surprises. What you see is what you get.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-4 p-4 cards">
                <i className="bi bi-people-fill text-info fs-1 mb-3"></i>
                <h4 className="fw-bold">Customer Focused</h4>
                <p className="text-muted">
                  Our friendly and knowledgeable team is here to assist you at
                  every step, from browsing to financing and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid my-5">
        <div className="container-fluid">
          <div className="row justify-content-center g-5 ">
            <div className="col-md-8 ">
              <h2 className="mb-4 text-center fw-bold">
                Our Commitment to You
              </h2>
              <p className="fs-5 text-muted text-center">
                Our dealership was founded on the principles of integrity,
                transparency, and a passion for automobiles. We believe that
                buying car should be an enjoyable and forward experience.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow-md border-0 rounded-4 p-4 cards">
                <h4 className="fw-bold text-primary">Our Mission</h4>
                <p>
                  To provide an unparalleled car-buying experience through
                  exceptional service, a diverse selection of high-quality
                  vehicles, and a commitment to customer satisfaction.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow-md border-0 rounded-4 p-4 cards">
                <h4 className="fw-bold text-success">Our Vision</h4>
                <p>
                  To be the most trusted and respected car dealership in the
                  region, known for our integrity, community involvement, and
                  seamless purchasing process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5 bg-light">
        <div className="container-fluid">
          <h2 className="text-center fw-bold mb-5">Meet Our Team</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4 text-center">
              <div className="card h-100 shadow-lg border-0 rounded-4 p-4 cards">
                <img
                  src="https://placehold.co/150x150/20c997/fff?text=Jane+Doe"
                  className="rounded-circle mx-auto mb-3"
                  alt="Jane Doe"
                />
                <h5 className="fw-bold">Jane Doe</h5>
                <p className="text-muted">General Manager</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="card h-100 shadow-lg border-0 rounded-4 p-4 cards">
                <img
                  src="https://placehold.co/150x150/6f42c1/fff?text=John+Smith"
                  className="rounded-circle mx-auto mb-3"
                  alt="John Smith"
                />
                <h5 className="fw-bold">John Smith</h5>
                <p className="text-muted">Head of Sales</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="card h-100 shadow-lg border-0 rounded-4 p-4 cards">
                <img
                  src="https://placehold.co/150x150/fd7e14/fff?text=Emily+Jones"
                  className="rounded-circle mx-auto mb-3"
                  alt="Emily Jones"
                />
                <h5 className="fw-bold">Emily Jones</h5>
                <p className="text-muted">Customer Relations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
