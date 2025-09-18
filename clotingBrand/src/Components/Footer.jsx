import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#f0f0f0] p-5 text-sm text-gray-700 ">
        <div className="flex flex-col items-start mt-10">
          <img
            src="https://mtjonline.com/cdn/shop/files/720x240.png?v=1651040388"
            alt="img"
            className="w-52 ms-0"
          />
          <p className="my-5">Vital Collections Pvt Ltd</p>
          <p>Call Us: +92(21)-36-111-685(MTJ)</p>
          <p className="mt-1">Email:cs@mtj.com.pk</p>
          <div className="flex mt-5 gap-2 mb-10">
            <GrFacebookOption size={22} />
            <IoLogoInstagram size={22} />
          </div>
        </div>
        <div className="mt-10 mb-10">
          <h3 className="text-lg font-bold">INFORMATION</h3>
          <h4 className="mt-4">Shipping & Information</h4>
          <h4 className="mt-3">Store Locator</h4>
          <h4 className="mt-3">Terms & Conditions</h4>
          <h4 className="mt-3">Wholesale</h4>
        </div>
        <div className="mt-10 mb-10">
          <h3 className="text-lg font-bold">CUSTOMER SUPPORT</h3>
          <h4 className="mt-4">Contact Us</h4>
          <h4 className="mt-3">Privacy Policy</h4>
          <h4 className="mt-3">Return & Exchange</h4>
          <h4 className="mt-3">FAQ's</h4>
        </div>
        <div className="mt-10 mb-10">
          <p className="text-lg font-bold">NEWSLETTER SIGNUP</p>
          <p className="mt-4">Receive our latest updates</p>
          <input
            type="text"
            placeholder="Enter Your Email Address"
            className="focus:outline-none mt-3 w-full px-3 py-2"
          />
          <button className="bg-[#d5ac55] mt-4 text-white p-3 w-full">
            SIGNUP
          </button>
        </div>
      </div>
      <div className="text-center p-5">
        <p className="text-sm">
          © 2025 Vital Collections Pvt Ltd. All Rights Reserved. Designed &
          Developed by Mean3 Pvt Ltd.
        </p>
      </div>
    </>
  );
};

export default Footer;
