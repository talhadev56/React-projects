import React from 'react'

const Fragnens = () => {
     const fragnenes = [
        {
      img: "https://mtjonline.com/cdn/shop/files/Floral-Kingdom_900x.png?v=1755463376",
      heading : "FLORAL KINGDOM",
     
      disPrice : "PKR 1,850",
    },
     {
      img: "https://mtjonline.com/cdn/shop/files/Elegent-1_900x.png?v=1755463378",
      heading : "Elegent",
      disPrice : "PKR 1,850",
    },
     {
      img: "https://mtjonline.com/cdn/shop/files/Sweet-Heaven-1_900x.png?v=1755463380",
      heading : "SWEET HEAVEN",
      
      disPrice : "PKR 1,850",
    },
    {
      img: "https://mtjonline.com/cdn/shop/files/Tears-of-roses-1_900x.png?v=1755463373",
      heading : "TEARS OF ROSES",
      disPrice : "PKR 1,850",
    },
    {
      img: " https://mtjonline.com/cdn/shop/files/oud-egnima-listing_900x.png?v=1755463735",
      heading : "OUD ENIGMA",
      disPrice : "PKR 5,450",
    },
    {
      img: " https://mtjonline.com/cdn/shop/files/Moon-Drop_900x.png?v=1755463372",
      heading : "MOON DROPS",
      
      disPrice : "PKR 1,850",
    },
    {
      img: "https://mtjonline.com/cdn/shop/files/oud-desir-listing_900x.png?v=1755463731",
      heading : "OUD DESIRE",
      disPrice : " PKR 5,750",
    },
     {
      img: "  https://mtjonline.com/cdn/shop/files/gold-armano-listing_900x.png?v=1755463734",
      heading : "GOLD ARMANO",
      disPrice : " PKR 5,450",
    },
    


   
    ]
  return (
    <>
            <div className="p-2 mb-10">
        <p className="text-4xl text-center mt-8 mb-3">Premiunm Frangnens Collection by MTJ</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-5">
          {fragnenes.map(function (element, index) {
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

export default Fragnens