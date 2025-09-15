import React from "react";
import { FaStar } from "react-icons/fa";

const TopProduct = () => {
  const data = [
    {
      image:
        "https://img.drz.lazcdn.com/g/kf/Sa42e27b5cfc24cb69d8be5e102583f7cO.jpg_720x720q80.jpg",
      heading: "Maroon casual shirts",
      para: "Our maroon casual shirts offer premium fabric, durability, and perfect fit for men",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyWBJ4QvfhipVEThza8xrwVN_0EXW-R_fmxg&s",
      heading: "Maroon casual shirts",
      para: "Stylish maroon casual shirts for men ensure  comfort and timeless everyday fashion",
    },
    {
      image:
        "https://img.drz.lazcdn.com/g/kf/Sb4c29d9e0a034fb0bb1a5c674c9b57d1V.jpg_720x720q80.jpg",
      heading: "Maroon casual shirts",
      para: "Maroon casual shirts for men blend modern style,  comfort, and perfect versatile fit.",
    },
  ];
  return (
    <section className="mt-[100px]">
      <div className="max-w-[1170px] m-auto mb-5 ">
        <div className="ms-9">
          <h2 className="text-amber-400 text-[18px]">Mens Outfits</h2>
          <h1 className="font-bold text-3xl my-1">Top Rated Products</h1>
          <p className="text-gray-500">
            The best products combine innovation and customer satisfaction for
            lasting value.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 justify-center">
          {data.map(function (elem, idx) {
            return (
              <>
                <div
                  key={idx}
                  className=" p-4 bg-gray-100 shadow-2xl text-center rounded-lg hover:bg-gray-200 "
                >
                  <img
                    src={elem.image}
                    alt="img"
                    className="w-[200px] h-[250px] mx-auto"
                  />
                  <span className="flex justify-center pt-2 pb-1">
                    
                    <FaStar className="text-amber-400" />
                    <FaStar className="text-amber-400" />
                    <FaStar className="text-amber-400" />
                    <FaStar className="text-amber-400" />
                    <FaStar className="text-amber-400" />
                  </span>
                  <h2 className="font-bold text-xl">{elem.heading}</h2>
                  <p className="text-gray-500 mb-2">{elem.para}</p>
                  <div className="flex items-center gap-1"></div>
                  <div className="text-center">
                    <button className=" px-4 py-2 rounded-[20px] bg-gradient-to-r from-orange-300 to-orange-500 ">
                      Order Now
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopProduct;
