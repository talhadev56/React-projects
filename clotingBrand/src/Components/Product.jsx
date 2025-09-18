import React from "react";

const Product = () => {
  return (
    <>
      <div className="p-5">
        <h2 className="text-3xl text-center">SHOP BY CATEGORY</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
          <img
            src="https://cdn.shopify.com/s/files/1/0551/9763/0638/files/uNSTITCHED_a4a6e6a4-0420-4449-82a6-f612b80da666.jpg?v=1753852602%22"
            alt=""
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0551/9763/0638/files/Menswear_c85dd58a-a371-4de5-9d45-dd6120bad6fc.jpg?v=1753852597"
            alt="" className=""
            
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0551/9763/0638/files/Unstitched-Fabric_df8485bc-97ef-4092-a52a-26efafd50fde.jpg?v=1753852605"
            alt="" className=""
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0551/9763/0638/files/Ready-To-Wear_2edeae7a-bb18-4ef5-9aa5-f1651731d990.jpg?v=1753852602"
            alt=""
          />
          <img
            src="https://mtjonline.com/cdn/shop/files/elegent_540x.png?v=1755463378"
            alt="" className="h-[580px] w-full"
          /> 
          <img
            src="https://cdn.shopify.com/s/files/1/0551/9763/0638/files/Waistcoat_00a082d7-34a4-4402-9a6b-e5dcc54bf973.jpg?v=1753852599"
            alt=""
          />
        </div>
      </div>
       <div className="my-3">
            <img src="https://mtjonline.com/cdn/shop/files/Web-Banner-Mahoor_1920x.jpg?v=1735991096" alt="" />
        </div>
    </>
  );
};

export default Product;
