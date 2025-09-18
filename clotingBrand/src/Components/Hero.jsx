import React, { useState, useEffect } from "react";

const Hero = () => {
  const images = [
    "https://mtjonline.com/cdn/shop/files/Web_Men_9-may.jpg?v=1746799177",
    "https://mtjonline.com/cdn/shop/files/Web_Banner_Studio.png?v=1753685434",
    "https://mtjonline.com/cdn/shop/files/Printinted-Lawn-3-Pc-Unstitched.jpg?v=1753189808",
  ];

  const [index, setIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="w-full h-[400px] flex items-center justify-center">
      <img
        src={images[index]}
        alt="brand-img"
        className="object-cover h-[400px] w-full"
      />
    </div>
  );
};

export default Hero;
