import React from "react";

const LandingPage = () => {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="container">
            <p className="text-white fs-1 text-center mt-5 e mb-5">
              We do whatever it takes to help you <br />
              <span className="b">understand the concepts.</span>
            </p>
            <div className="d-flex justify-content-center">
              <iframe
                width="950"
                height="540"
                src="https://www.youtube.com/embed/60SRAWmMXyc?si=-oQ7v3BP6re4NUNK"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="mb-5 rounded-5"
              ></iframe>
            </div>
            <div className="d-flex justify-content-center mb-5 ">
              <button className="btn button px-4 fs-4 fw-bold rounded-2 mb-5">
                Explore Free Learning
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
