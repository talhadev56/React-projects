import React from "react";

const Home = () => {
  return (
    <>
      <div className="text-light p-2">
        <div className="container-fluid">
          <div className="container text-center">
            <div>
              <p className="homePara mb-5 z-1">
                We only <span className="b">teach</span> <br />
                What we are really <br />
                really <span className="c z-2">good</span> at.
              </p>
              <button className="btn button px-5 fs-4 mb-5 fw-bold">
                Check Courses-Make an Impact
              </button>
              <div className="row justify-content-center align-items-center gap-5 mb-5">
                <div className="col-2">
                  <h1>25k+</h1>
                  <h4>student taught</h4>
                </div>
                <div className="col-2">
                  <h1>20+</h1>
                  <h4>Instructors</h4>
                </div>
                <div className="col-2">
                  <h1>600k+</h1>
                  <h4>Youtube Subs.</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
