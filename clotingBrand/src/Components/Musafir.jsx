import React from 'react'

const Musafir = () => {
    const Musafir = [
        {
      img: " https://mtjonline.com/cdn/shop/files/03_Pack_of_3_Deep_Neck_4f27497a-5e74-47bd-93f6-f6c68f387b76_900x.png?v=1755465280",
      heading : "MUSAFIR DEEP NECK PACK OF 3",
      disPrice : "PKR 3,350",
    },
     {
      img: "https://mtjonline.com/cdn/shop/files/02_Single_Crew_Neck_7eafbab5-4096-4c1d-8ed2-513e72b1107f_900x.png?v=1755465288",
      heading : "MUSAFIR CREW NECK",
      disPrice : "PKR 1,250",
    },

     {
      img: " https://mtjonline.com/cdn/shop/files/03_Single_Deep_Neck_65d5a6ee-0214-4ccf-a44f-1d36ba3082a4_900x.png?v=1755465287",
      heading : "MUSAFIR DEEP NECK",
      disPrice : "PKR 1,150",
    },
     {
      img: "http://mtjonline.com/cdn/shop/files/01_Single_Sando_3d937993-248a-4d96-ba8a-fed31ac03678_900x.png?v=1755465286",
      heading : "MUSAFIR SANDO",
      disPrice : "PKR 1,000",
    },
    ]
  return (
    <>
 <div className="p-2 mb-10">
        <p className="text-4xl text-center mt-8 mb-3">Mens UnderGarments Collection by MTJ</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-5">
          {Musafir.map(function (element, index) {
            return (
              <div className="shadow-md hover:shadow-lg" key={index}>
                <img
                  src={element.img}
                  alt="img"
                  className="bg-cover"
                />
                <div className="p-2">
                    <p className="text-md">{element.heading}</p>
                <div className="mb-5">
                <p className="text-gray-400">{element.disPrice}</p>
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

export default Musafir