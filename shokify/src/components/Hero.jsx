import React from "react";
import Slider from "react-slick";

const Hero = () => {
  const data = [
    {
      img: "https://www.mashalcouture.com/cdn/shop/files/men_clothing_brands_in_pakistan.jpg?v=1729080613&width=1445",
      title: "50% off on this collection",
      descrption:
        "Clothing brands create unique fashion statements, blending comfort, quality, and trends. Their styles inspire individuality, build trust, and connect people with timeless elegance and wearable identity.",
    },
    {
      img: "https://www.acecart.pk/cdn/shop/files/15-1_2c67951f-7825-44bc-b3f7-f530a3024ad8.webp?v=1713606593",
      title: "60% off on this collection",
      descrption:
        "Trendy clothing brands transform everyday looks into bold statements. They merge modern design, premium fabrics, and cultural influence to redefine fashion and empower personal expression.",
    },
    {
      img: "https://shahidafridistore.com/cdn/shop/files/IMG_0101_1880x.jpg?v=1710487941",
      title: "70% off on this FootWears",
      descrption:
        "Modern clothing brands emphasize sustainability, innovation, and inclusivity. They combine eco-friendly fabrics, ethical production, and creative design to inspire confidence while respecting people and the planet.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center">
      <div className="h-[700px] w-[700px] bg-orange-200 absolute top-1/1  rounded-3xl rotate-45 z-10 "></div>
      <div className="container pb-8 sm:pb-1 relative z-10 w-full">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center w-full px-6 sm:px-12">
                <div className="flex flex-col justify-center gap-6 text-center sm:text-left order-2 sm:order-1">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                    {item.title}
                  </h1>
                  <p className="text-base sm:text-lg text-gray-600">
                    {item.descrption}
                  </p>
                  <button className="capitalize bg-gradient-to-r from-orange-300 to-orange-500 hover:scale-105 duration-200 text-white py-3 px-6 rounded-full w-fit mx-auto sm:mx-0">
                    Order Now
                  </button>
                </div>

                <div className="flex justify-center order-1 sm:order-2">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-[280px] h-[280px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px] object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
