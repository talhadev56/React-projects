import React from "react";
import Button from "./Button";

const Courses = () => {
  const cardsData = [
    {
      cardPic: "https://ik.imagekit.io/sheryians/cohort-3_ekZjBiRzc.jpeg",
      cardPara: "2.0 Job Ready AI Powered Cohorent: Web + DSA + Aptitude",
      cardBtn: "LIVE BATCH",
      cardlan: "HINGLISH",
      cardOffer: "Early Bird Discount",
      disPrice: "5999 (+GST)",
      orgPrice: "11999",
    },
    {
      cardPic:
        "https://ik.imagekit.io/sheryians/courses_gif/undefined-web-dsa-thumb-10_ZKtPNgmW_.webp_Zhu2w1to5h.jpeg",
      cardPara: "DSA Domination Cohorent ",
      cardBtn: "LIVE BATCH",
      cardlan: "HINGLISH",
      cardOffer: "Limited Time Discount",
      disPrice: "6600 (+GST)",
      orgPrice: "7500",
    },
    {
      cardPic:
        "https://ik.imagekit.io/sheryians/courses_gif/undefined-IMG_5100_7vO7pODI9.JPG",
      cardPara: "Job Ready AI Powered Cohorent: Web + DSA + Aptitude",
      cardBtn: "LIVE BATCH",
      cardlan: "HINGLISH",
      cardOffer: "Limited Time Discount",
      disPrice: "5999 (+GST)",
      orgPrice: "11999",
    },
    {
      cardPic:
        "https://ik.imagekit.io/sheryians/courses_gif/undefined-maxresdefault_5-AHh9_1Y.jpg",
      cardPara: "Three.js Domination",
      cardlan: "HINDI",
      cardOffer: "Limited Time Discount",
      disPrice: "2499 (+GST)",
      orgPrice: "3500",
    },
    {
      cardPic:
        "https://ik.imagekit.io/sheryians/courses_gif/undefined-javaas_Large_jY0Wighav__6PygWBZQ.jpeg",
      cardPara: "Java & DSA Domination",
      cardlan: "HINGLISH",
      cardOffer: "Limited Time Discount",
      disPrice: "4900 (+GST)",
      orgPrice: "9999",
    },
    {
      cardPic:
        "https://ik.imagekit.io/sheryians/courses_gif/undefined-apti_reasoning_45vyAnZ4y.jpeg",
      cardPara: "Aptitude and Reasoning for Campus Placements",
      cardlan: "HINGLISH",
      cardOffer: "Limited Time Discount",
      disPrice: "1100 (+GST)",
      orgPrice: "1999",
    },
    {
      cardPic:
        "https://ik.imagekit.io/sheryians/courses_gif/Front-End_Domination__Create_Anything_with_Code-FRONTENDTHUBNAIL_Wf8WqcNJx.jpg",
      cardPara: "Front-end Domination: Create Anything with Code",
      cardlan: "HINDI",
      cardOffer: "Limited Time Discount",
      disPrice: "3999 (+GST)",
      orgPrice: "9999",
    },
  ];

  return (
    <section>
      <div className="container-fluid">
        <div className="container text-white">
          <h3 className="mt-5 fs-1 mb-5">Courses Offered.</h3>
          <div className="row g-4">
            {cardsData.map((elem, idx) => (
              <div className="col-lg-4 col-md-6 col-12" key={idx}>
                <div className="card bg-dark text-white" style={{minHeight:"28rem"}} >
                  <img
                    src={elem.cardPic}
                    className="card-img-top img-fluid"
                    alt="img"
                  />
                  <div className="card-body">
                    <p className="card-text fs-4">{elem.cardPara}</p>
                    <div className="mb-3">
                      {elem.cardBtn && (
                        <button className="btn color me-2 py-1">
                          {elem.cardBtn}
                        </button>
                      )}
                      <button className="btn clr py-1">{elem.cardlan}</button>
                    </div>
                    <p className="mb-0 mt-4 fs-5 b">{elem.cardOffer}</p>
                    <div className="fs-3 mt-0">
                      &#8377; {elem.disPrice}
                      <del className="ms-2">&#8377; {elem.orgPrice}</del>
                    </div>
                  </div>
                </div>
                <Button />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
