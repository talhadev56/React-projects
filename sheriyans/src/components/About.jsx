import React from "react";

const About = () => {
  return (
    <>
      <section className="text-white">
        <div className="container-fluid">
          <div className="container">
            <p className="fs-1 text-center e mt-5 mb-5">
              Top <span className="b">Companies</span> Our Students <br />
              Working With
            </p>
            <div>
              <img
                src="	https://ik.imagekit.io/sheryians/companies-logo/companies_CcvVE6pUo.png"
                className="img-fluid"
                alt="img"

              />
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn button mt-3 mb-5 fs-3 fw-bold px-5 rounded-4 py-1">
                Explore Courses
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
