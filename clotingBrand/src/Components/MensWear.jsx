import React from 'react'

const MensWear = () => {
    const mensWear = [
        {
      img: "https://mtjonline.com/cdn/shop/files/MK-9656_2_900x.jpg?v=1755464933",
      h : "MEN KURTA LIGHT OLIVE",
      op :"PKR 4,990",
      dp : "PKR 2,994",
    },
    {
      img: "https://mtjonline.com/cdn/shop/files/MK-9650_2_900x.jpg?v=1755464935",
      h : "MEN KURTA BISCOTTE",
      op :"PKR 4,990",
      dp : "PKR 2,994",
    },
    {
      img: "https://mtjonline.com/cdn/shop/files/MKS-9622_3_900x.jpg?v=1755465339",
      h : "MEN KAMEEZ SHALWAR NAVY BLUE",
      op :"PKR 8,990",
      dp : "PKR 5,394",
    },
    {
      img: "https://mtjonline.com/cdn/shop/files/MK-9595_1_e2a95657-fd4a-461a-8817-bce41a52f194_900x.jpg?v=1755465349",
      h : "MEN KURTA NAVY RUST",
      op :"PKR 4,990",
      dp : "PKR 2,994",
    },
    {
      img: "https://mtjonline.com/cdn/shop/files/000A2340_900x.jpg?v=1755464290",
      h : "WINTER'24 MEN KAMEEZ SHALWAR WITH WAIST COAT BLACK",
      op :"PKR 14,990",
      dp : "PKR 8,994",
    },
    {
      img: "https://mtjonline.com/cdn/shop/files/MKSW-1640_1_900x.jpg?v=1755464303",
      h : "WINTER'24 MEN KAMEEZ SHALWAR WITH WAIST COAT OLIVE GREEN",
      op :"PKR 14,990",
      dp : "PKR 8,994",
    },
    {
      img: "https://mtjonline.com/cdn/shop/files/MKSW-9709-W-24_6_900x.jpg?v=1755464314",
      h : "WINTER'24 MEN KAMEEZ SHALWAR WITH WAIST COAT PURPLE",
      op :"PKR 14,990",
      dp : "PKR 8,994",
    },
    {
      img: "https://mtjonline.com/cdn/shop/files/1604CHARCOAL-5_900x.jpg?v=1755459580",
      h : "WINTER'24 MEN KAMEEZ SHALWAR WITH WAIST COAT CHARCOAL",
      dp : "PKR 13,490",
    },
    {
      img: "https://mtjonline.com/cdn/shop/files/MUS-158Olive_3_900x.jpg?v=1755463178https://mtjonline.com/cdn/shop/files/1604CHARCOAL-5_900x.jpg?v=1755459580",
      h : "MTJ DEEP OLIVE 100% COTTON UNSTITCHED",
      dp : "PKR 3,990",
    },
    {
      img: "https://mtjonline.com/cdn/shop/files/MUS-158-OFFWHITE_1_0f8506fc-1d45-4ddd-b747-34da670e95f6.jpg?v=1755463177",
      h : "MTJ OFF WHITE 100% COTTON UNSTITCHED",
      dp : "PKR 3,990",
    },



    ]
  return (
    <>
       <div className="p-2 mb-10">
        <p className="text-4xl text-center mt-8">Men's Branded Collections</p>
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-2 mt-5 gap-5">
          {mensWear.map(function (element, index) {
            return (
              <div className="shadow-md hover:shadow-lg" key={index}>
                <img
                  src={element.img}
                  alt="img"
                  className="bg-cover"
                />
                <div className="p-2">
                    <p className="text-md">{element.h}</p>
                <div className="flex mb-5 mt-2">
                    <del className="text-gray-400">{element.op}</del>
                <p className="text-red-500 ms-2">{element.dp}</p>
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

export default MensWear