
import React from "react";

const Request = ({ show, handleClose }) => {
  return (
    <>
      <div
        className={`modal fade ${show ? "show d-block" : "d-none"}`}
        tabIndex="-1"
        role="dialog"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="modal-dialog">
          <div className="modal-content text-light">
            <div className="modal-header text-center">
              <div>
              <h3>Request a Callback</h3>
              <h5>Fill the form below to request a Callback from our team</h5></div>
              <button
                type="button"
                className="btn-close bg-light"
                onClick={handleClose}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Name :</label>
                  <input type="text" className="form-control bg-black border-0 text-white" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone :</label>
                  <input type="text" className="form-control bg-black border-0 text-white" placeholder="Enter your phone number" />
                </div>
                <div className="mb-3">
                  <label className="form-label">When can we call you? :</label>
                  <input type="datetime-local" className="form-control bg-black border-0 text-white" placeholder="Preferred time to call" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Enquire for :</label>
                  <input type="text" className="form-control bg-black border-0 text-white" placeholder="E.g., Course Name" />
                </div>
              </form>
            </div>
            <div className="modal-footer bg-black d-inline">
              <button type="button" className="btn btn-secondary" onClick={handleClose} style={{width:"48%"}}>
                Close
              </button>
              <button type="button" className="btn btn-primary" style={{width:"48%"}}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Request;
