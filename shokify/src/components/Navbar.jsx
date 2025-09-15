import React, { useState } from "react";
import shokify from "../assets/Background.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import {IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const menu = [
  { name: "Home", link: "/home" },
  { name: "Top Rated", link: "/topproduct" },
  { name: "Mens Wear", link: "/product" },
  { name: "Kids Wears", link: "/KidsSection" },
  { name: "Sale", link: "/Banner" },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <section>
      <div className="shadow-lg bg-orange-200">
        <div className="max-w-[1170px] m-auto py-3 px-4">
          <div className="flex justify-between items-center">
            <Link to="#" className="flex items-center gap-2">
              <img src={shokify} alt="Shokify Logo" className="w-12 sm:w-16" />
              <h2 className={`font-bold text-xl sm:text-2xl font-mono`}>
                SHOKIFY
              </h2>
            </Link>

            <div className="hidden sm:flex items-center gap-6">
              <div className="relative w-48 lg:w-64">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-white rounded-[50px] py-2 px-4 pr-10 focus:outline-none"
                />
                <IoMdSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer" />
              </div>

              <button className="flex items-center gap-2 text-white px-4 py-2 rounded-full cursor-pointer bg-gradient-to-r from-orange-300 to-orange-500 ">
                Order <FaCartShopping />
              </button>

              
            </div>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="sm:hidden text-3xl text-orange-600"
            >
              {mobileMenu ? <IoClose /> : <IoMenu />}
            </button>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex justify-center shadow-lg p-2">
        <ul className="flex items-center gap-4">
          {menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                className="inline-block px-4 hover:text-amber-400 duration-200"
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {mobileMenu && (
        <div className="sm:hidden bg-orange-100 shadow-lg p-4">
          <ul className="flex flex-col gap-4">
            {menu.map((data, idx) => (
              <li key={idx}>
                <Link
                  to={data.link}
                  className="block px-2 py-2 hover:text-amber-500 duration-200"
                  onClick={() => setMobileMenu(false)}
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Navbar;