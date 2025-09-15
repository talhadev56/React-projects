import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="w-full mt-10 bg-orange-200">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
        <div>
          <h2 className="font-bold mb-3 text-2xl">Shokify</h2>
          <p className="text-sm leading-6">
            Your trusted destination for quality products, modern styles, and
            fast delivery across the country.
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-3">Shop</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#men" className="hover:underline">
                Men’s Collection
              </a>
            </li>
            <li>
              <a href="#kids" className="hover:underline">
                Kids Wear
              </a>
            </li>
            <li>
              <a href="#sale" className="hover:underline ">
                Sale
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold mb-3">Support</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#shipping" className="hover:underline ">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#payment" className="hover:underline ">
                Payment Options
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline ">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold mb-3">Stay Updated</h2>
          <p className="mb-3 hover:underline">Follow us</p>
          <span className="flex justify-center sm:justify-start gap-3">
            <FaInstagram size={22} className="hover:text-white" />
            <FaFacebook size={22} className="hover:text-white" />
            <IoLogoTiktok size={22} className="hover:text-white" />
          </span>
        </div>
      </div>

      <div className="text-center py-4 text-xs">
        © 2025 MyStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
