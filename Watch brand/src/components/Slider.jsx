import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { text: "Flat Sale 20% OFF" },
    { text: "One Year Machine Warranty" },
    { text: "Free Delivery" },
    { text: "7 Days Hassle-free Returns" },
  ];

  const handlePrevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto p-3 flex justify-center items-center bg-black text-white">
      <button
        className="text-gray-400 hover:text-white mx-2"
        onClick={handlePrevSlide}
      >
        <FaChevronLeft size={20} />
      </button>

      <div className="text-center text-md px-4 min-w-[220px]">
        {slides[activeIndex].text}
      </div>

      <button
        className="text-gray-400 hover:text-white mx-2"
        onClick={handleNextSlide}
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
};

export default Slider;
