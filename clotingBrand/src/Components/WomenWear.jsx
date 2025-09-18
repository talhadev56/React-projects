import React from "react";

const WomenWear = () => {
  let data = [
    {
      img: "https://mtjonline.com/cdn/shop/files/WSDTS-PR-2162_4_900x.jpg?v=1755465576",
      heading : "PRINTED LAWN 3PC UNSTITCHED",
      orgPrice :"PKR 6,990",
      disPrice : "PKR 4,194",
    },
    {
       img: "https://mtjonline.com/cdn/shop/files/WSDTS-ED-2002-3_900x.jpg?v=1755465582",
      heading : "EMBROIDERED 3PC UNSTITCHED",
      orgPrice :"PKR 7,490",
      disPrice : " PKR 4,494",
    },
    
    {
      img: "https://mtjonline.com/cdn/shop/files/WSDTS-DP-1829-1_900x.jpg?v=1755465478",
      heading : "JACQUARD 3PC UNSTITCHED",
      disPrice :"PKR 5,490",
    },
    {
      img: "https://mtjonline.com/cdn/shop/files/WSDTS-ED-2001_900x.jpg?v=1755465550",
      heading : "EMBROIDERED 3PC UNSTITCHED",
      orgPrice :"PKR 7,990",
      disPrice : " PKR 4,794",
    },
    {
       img: "https://mtjonline.com/cdn/shop/files/WSDTS-ED-1995_900x.jpg?v=1755465548",
      heading : "EMBROIDERED 3PC UNSTITCHED",
      orgPrice :"PKR 7,690",
      disPrice : " PKR 4,614",
    },
    {
      img: "https://mtjonline.com/cdn/shop/files/WSDTS-PR-2164_4_900x.jpg?v=1755465575",
      heading : "PASTE PRINTED LAWN 3PC UNSTITCHED",
      orgPrice :"PKR 6,990",
      disPrice : "PKR 4,194",
    },
  ];
  return (
    <>
      <div className="p-2 mb-10">
        <p className="text-4xl text-center mt-8">Womens Collections</p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
          {data.map(function (element, index) {
            return (
              <div className="shadow-md hover:shadow-lg" key={index}>
                <img
                  src={element.img}
                  alt="img"
                  className="bg-cover"
                />
                <div className="p-2">
                    <p className="text-md">{element.heading}</p>
                <div className="flex mb-5 mt-2">
                    <del className="text-gray-400">{element.orgPrice}</del>
                <p className="text-red-500">{element.disPrice}</p>
                </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WomenWear;
