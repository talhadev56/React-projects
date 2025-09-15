import React from "react";
import { FaStar } from "react-icons/fa";

const Product = () => {
  const data = [
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/8/335518145/VC/FB/IU/155351929/e-commerce-men-t-shirt-photography.jpeg",
      heading: "Best T-Shirt",
      color: "blue and white",
      rating: "4.2",
    },
    {
      image:
        "https://outfitters.com.pk/cdn/shop/files/F1533106317_7acf32f9-2c0e-49dc-bbde-960cbe780d25.jpg?v=1754458337&width=533",
      heading: "Men T-Shirt & Jeans",
      color: "All colors",
      rating: "4.4",
    },
    {
      image:
        "https://www.acecart.pk/cdn/shop/files/13-1_aab9033e-cee9-4236-9950-c6e3c2a0d99d.webp?v=1732114987",
      heading: "Printed Shirts",
      color: "white and Black",
      rating: "4.5",
    },
    {
      image:
        "https://outfitters.com.pk/cdn/shop/files/F1474106001_1_0843b6d6-6dff-475a-8aea-87b284f8e465.jpg?v=1755236889&width=533",
      heading: "Men T-Shirt & Jeans",
      color: "All colors",
      rating: "4.3",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREe2RqvSMduJmmfcDZo2WLA-mRWXhsto3LDg&s",
      heading: "Oversize Shirt",
      color: "Black and Blue",
      rating: "4.0",
    },

  ];

  return (
    <section>
      <div className="max-w-[1170px] m-auto">
        <div className="text-center mt-10">
          <h2 className="text-amber-400 text-[18px]">
            Top Selling Product For You
          </h2>
          <h1 className="font-bold text-3xl my-1">Products</h1>
          <p className="text-gray-500">
            These products combine quality, durability, affordability,
            innovation, reliability, comfort, and customer satisfaction for
            lasting value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 p-5 justify-center">
          {data.map((elem, idx) => (
            <div
              key={idx}
              className="mb-5 p-2 bg-gray-100 shadow-lg rounded-md hover:bg-gray-200"
            >
              <img
                src={elem.image}
                alt={elem.heading}
                className="w-[200px] h-[250px] object-cover mx-auto"
              />
              <h2 className="font-bold mt-2 text-center text-md-left">{elem.heading}</h2>
              <p className="text-gray-500 text-center text-md-left">{elem.color}</p>
              <div className="flex justify-center md:justify-start gap-1">
                <FaStar className="text-amber-400" />
                <span>{elem.rating}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <a href="/home">
            <button className=" px-8 py-3 rounded-md font-semibold cursor-pointer text-white bg-gradient-to-r from-orange-300 to-orange-500 ">
            Check all Products
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Product;
