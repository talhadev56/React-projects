import React from "react";

const WomenWatch = () => {
  const watData = [
    {
      image:
        "https://currenwatches.com.pk/cdn/shop/files/vwwv.jpg?v=1750315446&width=533",
      heading: "CURREN 9089 Women's St.",
      disprice: "Rs.4,299.00",
      orgPrice: "Rs.5,249.00",
      btnData: "Add to cart",
    },
    {
      image:
        "https://currenwatches.com.pk/cdn/shop/files/CFDSSW.jpg?v=1743052069&width=533",
      heading: "CURREN 9096 Women's Sta",
      disprice: "Rs.4,999.00",
      orgPrice: "Rs.5,999.00",
      btnData: "Add to cart",
    },
    {
      image:
        "https://currenwatches.com.pk/cdn/shop/files/dsc.jpg?v=1750315023&width=533",
      heading: "CURREN 9091 Women's ...",
      disprice: "Rs.4,299.00",
      orgPrice: "Rs.5,499.00",
      btnData: "Add to cart",
    },
    {
      image:
        "https://currenwatches.com.pk/cdn/shop/files/gfffgfg.jpg?v=1750315541&width=533",
      heading: "CURREN 9087 Women's Sta",
      disprice: "Rs.3,599.00",
      orgPrice: "Rs.5,549.00",
      btnData: "Add to cart",
    },
    {
      image:
        "https://currenwatches.com.pk/cdn/shop/files/bnuibiijni.jpg?v=1745556585&width=533",
      heading: "CURREN 9099 Women's Sta",
      disprice: "Rs.4,299.00",
      orgPrice: "Rs.5,374.00",
      btnData: "Add to cart",
    },
    {
      image:
        "https://currenwatches.com.pk/cdn/shop/files/cssc.jpg?v=1749703058&width=533",
      heading: "CURREN 9085 Women's Sta",
      disprice: "Rs.3,999.00",
      orgPrice: "Rs.4,999.00",
      btnData: "Add to cart",
    },
    {
      image:
        "https://currenwatches.com.pk/cdn/shop/products/9061c_5.jpg?v=1750833325&width=533",
      heading: "CURREN 9061 Women....",
      disprice: "Rs.3,699.00",
      orgPrice: "Rs.4,624.00",
      btnData: "Add to cart",
    },
    {
      image:
        "https://currenwatches.com.pk/cdn/shop/files/hyh.jpg?v=1729335118&width=533",
      heading: "CURREN 9098 Women...",
      disprice: "Rs.3,799.00",
      orgPrice: "Rs.4,749.00",
      btnData: "Add to cart",
    },

    {
      image:
        "https://currenwatches.com.pk/cdn/shop/files/cew_73dd2878-5863-4515-8250-838161606a25.jpg?v=1750315685&width=533",
      heading: "CURREN 9101 Women....",
      disprice: "Rs.3,699.00",
      orgPrice: "Rs.4,623.00",
      btnData: "Add to cart",
    },

    {
      image:
        "https://currenwatches.com.pk/cdn/shop/files/cdsscsd.jpg?v=1725628269&width=533",
      heading: "CURREN 9077 Women...",
      disprice: "Rs.3,499.00",
      orgPrice: "Rs.4,374.00",
      btnData: "Add to cart",
    },
    {
      image:
        "https://currenwatches.com.pk/cdn/shop/files/VFD.jpg?v=1747820666&width=533",
      heading: "CURREN 9097 Women...",
      disprice: "Rs.3,499.00",
      orgPrice: "Rs.4,374.00",
      btnData: "Add to cart",
    },
    {
      image:
        "https://currenwatches.com.pk/cdn/shop/files/brgbrrbr.jpg?v=1694511359&width=533",
      heading: "CURREN 9068 Women...",
      disprice: "Rs.3,499.00",
      orgPrice: "Rs.4,374.00",
      btnData: "Add to cart",
    },
  ];
  return (
    <>
      <h1 className="text-3xl sm:text-4xl text-center font-semibold mt-5">
        Women's Luxury Watches Collection
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
      <div className="flex justify-center mb-3">
        <button className="bg-black text-white px-3 py-2 rounded-md hover:bg-red-600">
          Load More
        </button>
      </div>
    </>
  );
};

export default WomenWatch;
