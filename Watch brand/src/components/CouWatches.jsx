import React from "react";

const CouWatches = () => {
  const watData = [
    {
      image:
        "https://currenwatches.com.pk/cdn/shop/files/DSCDS_892be544-eb8b-40b3-8f7a-e416c3a0ca10.jpg?v=1718262065&width=533",
      heading: "CURREN Couples Stai",
      disprice: "Rs.7,999.00",
      orgPrice: "Rs.9,999.00",
      btnData: "Add to cart",
    },
    {
      image:
        "https://currenwatches.com.pk/cdn/shop/files/cdsdcsdc.jpg?v=1718261454&width=533",
      heading: "CURREN Couples Stainle",
      disprice: "Rs.7,999.00",
      orgPrice: "Rs.9,999.00",
      btnData: "Add to cart",
    },
    {
      image:
        "https://currenwatches.com.pk/cdn/shop/files/CDS_a380089e-075c-4175-9f0e-26d2410057fe.jpg?v=1733295971&width=533",
      heading: " CURREN Couples Stai.",
      disprice: "Rs.7,299.00",
      orgPrice: "Rs.9,124.00",
      btnData: "Add to cart",
    },
    {
      image:
        "https://currenwatches.com.pk/cdn/shop/files/Untitled-1_66f6c1c7-e2b6-4f87-8520-1adbd432be7a.jpg?v=1733291653&width=533",
      heading: "URREN Couples Stain",
      disprice: "Rs.7,299.00",
      orgPrice: "Rs.9,124.00",
      btnData: "Add to cart",
    },
  ];
  return (
    <>
      <h1 className="text-3xl sm:text-4xl text-center font-semibold mt-5">
       
        Luxary Couples Watches Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 h-auto mt-5 rounded-md border-t  border-solid border-gray-300">
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

export default CouWatches;
