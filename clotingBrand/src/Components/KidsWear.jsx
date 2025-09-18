import React from 'react'

const KidsWear = () => {
    const kiWear = [
        {
      img: "https://mtjonline.com/cdn/shop/files/BK-9533-1_900x.jpg?v=1755465668%20900w",
      heading : "BOYS KURTA LEMON",
      orgPrice :"PKR 2,490",
      disPrice : "PKR 1,494",
    },
     {
      img: "https://mtjonline.com/cdn/shop/files/6F5A5711_900x.jpg?v=1755465669%20900w",
      heading : "BOYS KURTA BLACK",
      orgPrice :"PKR 2,490",
      disPrice : "PKR 1,494",
    },
     {
      img: "https://mtjonline.com/cdn/shop/files/BKP-8543_3_900x.jpg?v=1755464015",
      heading : "SUMMER'25 BOYS CASUAL KURTA PAJAMA OFF WHITE",
      orgPrice :"PKR 4,390",
      disPrice : "PKR 2,634",
    },
    {
      img: "https://mtjonline.com/cdn/shop/files/BKP-8546_2_900x.jpg?v=1755464014",
      heading : "SUMMER'25 BOYS CASUAL KURTA PAJAMA TEAL BLUE",
      orgPrice :"PKR 4,390",
      disPrice : "PKR 2,634",
    },
    {
      img: " https://mtjonline.com/cdn/shop/files/000A9384_900x.jpg?v=1755463945",
      heading : "SUMMER'25 TEENS KURTA PAJAMA EMBROIDERED BLACK",
      orgPrice :"PKR 5,990",
      disPrice : " PKR 3,594",
    },
    {
      img: " https://mtjonline.com/cdn/shop/products/BTK-8218-F_900x.jpg?v=1755466710",
      heading : "SUMMER'24 TEENS KURTA CASUAL MAROON",
      orgPrice :"PKR 2,874 ",
      disPrice : "PKR 1,724",
    },
    {
      img: " https://mtjonline.com/cdn/shop/files/BTKP-8550_2_900x.jpg?v=1755464028",
      heading : "SUMMER'25 TEENS KURTA PAJAMA CASUAL CHARCOAL",
      orgPrice :"PKR 5,990",
      disPrice : " PKR 3,594",
    },
     {
      img: " http://mtjonline.com/cdn/shop/files/BTKP-8549_4_900x.jpg?v=1755464044",
      heading : "SUMMER'25 TEENS KURTA PAJAMA CASUAL NAVY BLUE",
      orgPrice :"PKR 5,990",
      disPrice : " PKR 3,594",
    },
    


   
    ]
  return (
    <>
    <div className="p-2 mb-10">
        <p className="text-4xl text-center mt-8">Kids Collections</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-5">
          {kiWear.map(function (element, index) {
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
  )
}

export default KidsWear