import React from "react";

const Organizar = () => {
  const watData = [
    {
      image:
        "https://currenwatches.com.pk/cdn/shop/files/5195xGFXHqL._AC_SL1000.jpg?v=1723890633&width=493",
      heading: "CURREN Original Brand Black",
      disprice: "Rs.1,499.00",
      orgPrice: "Rs.1,999.00",
      btnData: "Add to cart",
    },
    {
      image:
        "https://currenwatches.com.pk/cdn/shop/files/0f2493c1-7d64-429e-910d-fbe650c86f42.jpg?v=1728983590&width=493",
      heading: "CURREN Original Brand Black",
      disprice: "Rs.2,499.00",
      orgPrice: "Rs.3,132.00",
      btnData: "Add to cart",
    },
    {
      image:
        "https://currenwatches.com.pk/cdn/shop/files/4f1c945b-ea5b-4624-8c84-4ee416fcdbf3_1.jpg?v=1728386714&width=493",
      heading: "CURREN Original Brand Portable",
      disprice: "Rs.1,999.00",
      orgPrice: "Rs.3,999.00",
      btnData: "Add to cart",
    },
    {
      image:
        "https://currenwatches.com.pk/cdn/shop/files/c554f7f3-91ac-42b7-a5d7-c1808ae93456_9454360d-8e0a-44c0-87f6-ecc68545d364.jpg?v=1753531829&width=493",
      heading: "CURREN Original Brand Watc",
      disprice: "Rs.699.00",
      orgPrice: "Rs.874.00",
      btnData: "Add to cart",
    },
    {
      image:
        "https://currenwatches.com.pk/cdn/shop/files/d88f2562-29a6-45fa-98f9-53d68e0bd254.jpg?v=1728480041&width=493",
      heading: "CURREN Original Brand Portable ",
      disprice: "Rs.2,199.00",
      orgPrice: "Rs.3,999.00",
      btnData: "Add to cart",
    },
  ];
  return (
    <>
      <h1 className="text-3xl sm:text-4xl text-center font-semibold mt-5">
        {" "}
        Luxary Boxes Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5 h-auto mt-5 rounded-md border-t  border-solid border-gray-300">
        {watData.map(function (elem, idx) {
          return (
            <div
              className="bg-white hover:shadow-xl rounded-lg p-3 transition-transform duration-300 hover:scale-105"
              key={idx}
            >
              <img
                src={elem.image}
                alt="product-img"
                className="w-full h-64 object-cover cursor-pointer"
              />
              <div>
                <h2 className="text-lg font-semibold text-[#202020] mt-2 truncate">
                  {elem.heading}
                </h2>
                <h3 className="text-lg m-1">
                  {elem.disprice}
                  <span className="text-red-500 text-md ml-2">
                    <del>{elem.orgPrice}</del>
                  </span>
                </h3>
                <button className="bg-[#202020] text-white p-3 w-full rounded-lg mt-1 hover:bg-red-600 transition">
                  {elem.btnData}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Organizar;
