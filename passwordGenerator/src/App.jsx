import React, { useState } from "react";
import { LC, NC, SC, UC } from "./data/Data";


const App = () => {
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [numbers, setNumbers] = useState(false);
  let [symbols, setSymbols] = useState(false);
  let [passwordLen, setPasswordLen] = useState(10);
  let [fpass, setFpass] = useState('');

  const createPassword = () => {
    let finalPass = "";
    let charSet = "";

    if (uppercase || lowercase || numbers || symbols) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (numbers) charSet += NC;
      if (symbols) charSet += SC;

      for (let i = 0; i < passwordLen; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      setFpass(finalPass);
    } else {
      alert("Please select at least 1 checkbox!");
    }
  };

  const copyPass = () => {
    navigator.clipboard.writeText(fpass);
    alert("Password copied!");
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-dark">
      <div style={{ maxWidth: "400px" }}>
        <div className="bg-secondary p-4 rounded box">
          <h2 className="fw-bolder fs-2 text-center">PASSWORD GENERATOR</h2>

         
          <div className="d-flex mb-3">
            <input
              type="text"
              readOnly
              className="form-control me-2"
              style={{ outline: "none", boxShadow: "none" }}
              value={fpass}
            />
            <button className="btn btn-dark" onClick={copyPass}>
              Copy
            </button>
          </div>

          
          <div className="p-1 d-flex align-items-center">
            <label className="fs-4 fw-bold">Password length</label>
            <input
              type="number"
              className="form-control ms-4"
              style={{ boxShadow: "none", maxWidth: "80px" }}
              value={passwordLen}
              onChange={(event) => setPasswordLen(Number(event.target.value))}
              max={20}
              min={10}
            />
          </div>

         
          <div className="p-1">
            <input
              type="checkbox"
              checked={uppercase}
              onChange={() => setUppercase(!uppercase)}
            />
            <label className="fs-4 fw-bold ms-2">Capital letters</label>
          </div>
          <div className="p-1">
            <input
              type="checkbox"
              checked={lowercase}
              onChange={() => setLowercase(!lowercase)}
            />
            <label className="fs-4 fw-bold ms-2">Small letters</label>
          </div>
          <div className="p-1">
            <input
              type="checkbox"
              checked={numbers}
              onChange={() => setNumbers(!numbers)}
            />
            <label className="fs-4 fw-bold ms-2">Numbers</label>
          </div>
          <div className="p-1">
            <input
              type="checkbox"
              checked={symbols}
              onChange={() => setSymbols(!symbols)}
            />
            <label className="fs-4 fw-bold ms-2">Symbols</label>
          </div>

          <button
            className="btn btn-dark mt-4 w-100 fs-4"
            onClick={createPassword}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

