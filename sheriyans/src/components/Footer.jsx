import React from "react";

const Footer = () => {
  const socialLinks = [
    { icon: "bi-youtube", label: "YouTube" },
    { icon: "bi-instagram", label: "Instagram" },
    { icon: "bi-linkedin", label: "LinkedIn" },
    { icon: "bi-discord", label: "Discord" },
    { icon: "bi-twitter", label: "Twitter"},
  ];

  const companyLinks = [
    "About Us",
    "Support",
    "Privacy Policy",
    "Terms and Conditions",
    "Pricing and Refund",
    "Hire From Us",
    "Submit Projects",
  ];

  const handleHover = (e, isHover) => {
    e.currentTarget.style.color = isHover ? "rgb(39, 224, 179)" : "white";
  };

  return (
    <>
     <hr className="mx-auto mt-lg-5" style={{ borderTop: "1px solid white", width: "90%" }} />
    <footer className="text-white py-5">
      <div className="container">
        <div className="row  g-5">
         
          <div className="col-lg-3 col-md-6 col-12">
            <div className="mb-4">
              <div className="d-flex align-items-center mb-3">
                <img
                  src="https://ik.imagekit.io/sheryians/light-logo_lNzGXRRlQ.png"
                  alt="Logo"
                  width={50}
                  height={50}
                  className="me-2"
                />
              </div>
              <p
                style={{ color: "white",fontSize: "18px", lineHeight: "0.5" }}
              >
                Let's connect with our socials
              </p>
              <div className="d-flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    aria-label={social.label}
                    className="d-flex align-items-center justify-content-center text-white text-decoration-none"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "8px",
                    }}
                  >
                    <i
                      className={`bi ${social.icon}`}
                      style={{ fontSize: "20px" }}
                    ></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

         
       
          <div className="col-lg-3  col-12">
            <h5
              className="fw-semibold mb-2"
              style={{ fontSize: "22px", color: "#fff" }}
            >
              Company
            </h5>
            <ul className="list-unstyled">
              {companyLinks.map((link, index) => (
                <li className="mb-3" key={index}>
                  <a
                    href="#"
                    className="text-decoration-none"
                    style={{
                      color: "white",
                      fontSize: "18px",
                      lineHeight: "1.5",
                    }}
                    onMouseEnter={(e) => handleHover(e, true)}
                    onMouseLeave={(e) => handleHover(e, false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="col-lg-3 col-md-6 col-12">
            <h5
              className="fw-semibold mb-2"
              style={{ fontSize: "22px", color: "#fff" }}
            >
              Community
            </h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <a
                  href="#"
                  className="text-decoration-none"
                  style={{
                    color: "white",
                    fontSize: "18px",
                    lineHeight: "1.5",
                  }}
                  onMouseEnter={(e) => handleHover(e, true)}
                  onMouseLeave={(e) => handleHover(e, false)}
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>

          
          <div className="col-lg-3 col-md-6 col-12">
            <h5
              className="fw-semibold mb-2"
              style={{ fontSize: "22px", color: "#fff" }}
            >
              Get In Touch
            </h5>
            <div className="contact-info">
              <p className="mb-3">
                <a
                  href="tel:+919691778470"
                  className="text-decoration-none"
                  style={{
                    color: "white",
                    fontSize: "18px",
                    lineHeight: "1.5",
                  }}
                  onMouseEnter={(e) => handleHover(e, true)}
                  onMouseLeave={(e) => handleHover(e, false)}
                >
                  +91 9691778470
                </a>
              </p>
              <p className="mb-3">
                <a
                  href="tel:+918109161752"
                  className="text-decoration-none"
                  style={{
                    color: "white",
                    fontSize: "18px",
                    lineHeight: "1.5",
                  }}
                  onMouseEnter={(e) => handleHover(e, true)}
                  onMouseLeave={(e) => handleHover(e, false)}
                >
                  +91 8109161752
                </a>
              </p>
              <p className="mb-3">
                <a
                  href="mailto:hello@Sheriyan.com"
                  className="text-decoration-none"
                  style={{
                    color: "white",
                    fontSize: "18px",
                    lineHeight: "1.5",
                  }}
                  onMouseEnter={(e) => handleHover(e, true)}
                  onMouseLeave={(e) => handleHover(e, false)}
                >
                  hello@Sheriyan.com
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-decoration-none"
                  style={{
                    color: "white",
                    fontSize: "18px",
                    lineHeight: "1.6",
                  }}
                  onMouseEnter={(e) => handleHover(e, true)}
                  onMouseLeave={(e) => handleHover(e, false)}
                >
                  23-B, Indrapuri Sector C,
                  <br />
                  Bhopal (MP), 462021
                </a>
              </p>
            </div>
          </div>
        </div>

       
        <hr />
        <div className="text-center">
          <p
            className="mb-0 mt-0"
            style={{ color: "#fff", fontSize: "17px", lineHeight: "1" }}
          >
            CopyRight © 2025 Sheriyans Pvt. Ltd.
            <br />
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
