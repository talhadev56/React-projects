import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-black text-white flex flex-wrap items-center p-4 sticky top-0">
       
        <Link className="uppercase text-3xl" to="/">
          <span className="bg-red-600 rounded-md px-1">c</span>urren
        </Link>

       
        <ul className="capitalize font-semibold text-md flex flex-col sm:flex-row gap-4 sm:ms-[120px] ms-0 mt-4 sm:mt-0 items-start sm:items-center w-full sm:w-auto">
          <li className="lg:ms-[120px]">
            <Link to="/product">Mens Watches</Link>
          </li>
          <li>
            <Link to="/womenwatch">Womens Watches</Link>
          </li>
          <li>
            <Link to="/couwatches">Couple Watches</Link>
          </li>
          <li>
            <Link to="/organizar">Watch Organizer</Link>
          </li>
          <li>
            <Link to="https://www.postex.pk/tracking">Track Order</Link>
          </li>
        </ul>

        
        <div className="flex items-center ml-auto gap-4 cursor-pointer mt-4 sm:mt-0">
          <IoSearch size={26} />
          <FaBagShopping size={26} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
