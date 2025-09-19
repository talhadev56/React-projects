import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {" "}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-b border-solid border-gray-300 p-5 mb-3">
        <div className="leading-loose text-center lg:text-right">
          <img
            src="https://currenwatches.com.pk/cdn/shop/files/logo1_c788e227-929f-4f00-a91e-1e05eee605db.png?v=1673427169&width=200"
            alt="logo"
            className="mx-auto lg:mx-0"
          />
          <p className="mt-3">
            Curren Watches: A brand known for timepieces that blend quality,
            style and functionality.
          </p>
          <div className="flex items-center gap-2 justify-center lg:justify-start mt-3 mb-1">
            <CiLocationOn className="text-xl text-red-600 shrink-0" />
            <p className="text-sm lg:text-md leading-none">
              D-40 Block 6, Federal B Area, Karimabad, Karachi
            </p>
          </div>

          <div className="flex items-center mt-3 mb-1 gap-2 justify-center lg:justify-start">
            <IoCallOutline className="text-xl text-red-600 shrink-0" />
            <p className="underline text-sm lg:text-base leading-none">
              03201223290
            </p>
          </div>
          <div className="flex items-center mt-3 mb-1 gap-2 justify-center lg:justify-start">
            <TfiEmail className="text-xl text-red-600 shrink-0" />
            <p className="underline text-sm lg:text-base leading-none">
              support@currenwatches.com.pk
            </p>
          </div>
        </div>
        <div className="leading-loose text-center lg:text-right">
          <h2 className="lg:text-2xl text-4xl mt-3 md:mt-0">Collections</h2>
          <ul>
            <li className="mt-3 mb-2">Hot Selling</li>
            <li className="mb-2">New Arrival</li>
            <li className="mb-2">Men Watches</li>
            <li className="mb-2">Women Watches</li>
            <li className="mb-2">Stainless Steel</li>
            <li className="mb-2">Couples Watches</li>
          </ul>
        </div>
        <div className="leading-loose text-center lg:text-right ">
          <h2 className="lg:text-2xl text-4xl mt-3 md:mt-0">Information</h2>
          <ul>
            <li className="mt-3 mb-2">Search</li>
            <li className="mb-2">About Us</li>
            <li className="mb-2">Privacy Policy</li>
            <li className="mb-2">Information</li>
            <li className="mb-2">Shipping Policy</li>
            <li className="mb-2">Terms & Conditions</li>
          </ul>
        </div>
        <div className="leading-loose text-center lg:text-right mt-3 md:mt-0">
          <h2 className="lg:text-2xl text-4xl">Our Newsletter</h2>
          <p className="mt-3">
            Subscribe to our newsletter for the latest arrivals, exclusive
            offers, style tips, and special discounts—delivered straight to your
            inbox!
          </p>
          <input
            type="text"
            placeholder="Email"
            className="border-black border border-solid px-3 py-2 rounded-md mt-3 mb-2"
          />
          <button className="bg-black text-white px-4 py-2 rounded-md ms-2 lg:ms-0">
            Subscribe
          </button>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex justify-center lg:justify-end  cursor-pointer gap-2 me-10 mb-3 sm:mb-1 lg:mb-0">
          <div className="bg-gray-300 p-2 rounded-md hover:bg-gray-400">
            <FaInstagram size={26} />
          </div>
          <div className="bg-gray-300 p-2 rounded-md  hover:bg-gray-400">
            <FaYoutube size={29} />
          </div>
          <div className="bg-gray-300 p-2 rounded-md  hover:bg-gray-400">
            <FaFacebookSquare size={26} />
          </div>
          <div className="bg-gray-300 p-2 rounded-md  hover:bg-gray-400">
            <FaTiktok size={26} />
          </div>
        </div>

        <p className="text-center">2025, Curren Watches Powered by Shopify</p>
      </div>
    </>
  );
};

export default Footer;
