import React from "react";

const Product = () => {
  const watData = [
    {
      image:
        "https://currenwatches.com.pk/cdn/shop/products/cdsdsdsfrer.jpg?v=1740226733&width=533",
      heading: "CURREN 8415 Men's Chr...",
      disprice: "Rs.5,199.00",
      orgPrice: "Rs.6,499.00",
      btnData: "Add to cart",
    },
    {
      image:
        "https://currenwatches.com.pk/cdn/shop/files/sa_db84d07b-339c-41e0-bb4e-0fb106c11702.jpg?v=1725628559&width=533",
      heading: "CURREN 8422 Men's Chr...",
      disprice: "Rs.3,599.00",
      orgPrice: "Rs.4,499.00",
      btnData: "Add to cart",
    },
    {
      image:
        "https://currenwatches.com.pk/cdn/shop/products/8365_3.jpg?v=1755583471&width=533",
      heading: "CURREN 8365 Men's lead...",
      disprice: "Rs.3,599.00",
      orgPrice: "Rs.4,499.00",
      btnData: "Add to cart",
    },
    {
      image:
        "https://currenwatches.com.pk/cdn/shop/files/ciddsioh.jpg?v=1737450752&width=533",
      heading: "CURREN 8458 Men's sta...",
      disprice: "Rs.3,599.00",
      orgPrice: "Rs.4,499.00",
      btnData: "Add to cart",
    },
    {
      image:
        "https://currenwatches.com.pk/cdn/shop/files/Untitled-1_3d3558d1-eb07-46dc-afed-8244d542d332.jpg?v=1750835139&width=533",
      heading: "CURREN 8464 Men's Ru...",
      disprice: "Rs.5,599.00",
      orgPrice: "Rs.7,499.00",
      btnData: "Add to cart",
    },
    {
      image:
        "https://currenwatches.com.pk/cdn/shop/files/C007_-_-_-_-2_b7c524bb-fa5a-4bf8-9532-1343be3d44a6.jpg?v=1750310749&width=533",
      heading: "CURREN 8363 Men's Ru...",
      disprice: "Rs.5,799.00",
      orgPrice: "Rs.7,249.00",
      btnData: "Add to cart",
    },
    {
      image:
        "https://currenwatches.com.pk/cdn/shop/files/vef.jpg?v=1750320238&width=533",
      heading: "CURREN 8442 Men's Ru...",
      disprice: "Rs.6,799.00",
      orgPrice: "Rs.8,249.00",
      btnData: "Add to cart",
    },
    {
      image:
        "https://currenwatches.com.pk/cdn/shop/files/vefeee-Recovered_91d3cda9-61da-479a-96f8-224664482ca4.jpg?v=1750486383&width=533",
      heading: "CURREN 8464 Men's sta...",
      disprice: "Rs.3,599.00",
      orgPrice: "Rs.4,499.00",
      btnData: "Add to cart",
    },
    {
      image:
        "https://currenwatches.com.pk/cdn/shop/files/dcdc.jpg?v=1749564628&width=533",
      heading: "CURREN 8469 Men's Ru...",
      disprice: "Rs.4,999.00",
      orgPrice: "Rs.6,599.00",
      btnData: "Add to cart",
    },
    {
      image:
        "https://currenwatches.com.pk/cdn/shop/files/jiojo.jpg?v=1750312464&width=533",
      heading: "CURREN 8456 Men's Ru...",
      disprice: "Rs.3,599.00",
      orgPrice: "Rs.4,499.00",
      btnData: "Add to cart",
    },
    {
      image:
        "https://currenwatches.com.pk/cdn/shop/files/9d62d010889eff52a905e03c3fc28e51.jpg?v=1740468728&width=533",
      heading: "CURREN original brand",
      disprice: "Rs.4,999.00",
      orgPrice: "Rs.6,249.00",
      btnData: "Add to cart",
    },

    {
      image:
        "https://currenwatches.com.pk/cdn/shop/products/b_531f4991-da42-49ec-915b-da25dbd8af06.jpg?v=1740226373&width=533",
      heading: "CURREN 8402 mens Ste...",
      disprice: "Rs.5,999.00",
      orgPrice: "Rs.7,249.00",
      btnData: "Add to cart",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 h-auto mt-5 rounded-md">
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

export default Product;
