// import React from "react";
// import { IoCallOutline } from "react-icons/io5";
// import { VscAccount } from "react-icons/vsc";
// import { IoIosHeartEmpty } from "react-icons/io";
// import { IoCartOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <>
//       <div>
//         <div className="flex pt-5 px-5 justify-between m-1">
//           <div className="flex items-center gap-1">
//             <IoCallOutline size={16} />
//             <Link to="/" className="text-center">+92(21)-36-111-685(MTJ)</Link>
//           </div>
//           <div>
//            <Link to="/"> <img
//               src="https://mtjonline.com/cdn/shop/files/720x240.png?v=1651040388"
//               alt="logo-img"
//               style={{ width: "200px" }}
//             /></Link>
//           </div>
//           <div className="flex">
//             <div className="">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="border-b border-black p-1 focus:outline-none  me-7"
//               />
//             </div>

//             <div className="gap-2">
//               <Link to="/" className="flex"><VscAccount size={30} />
//              <IoIosHeartEmpty size={30}/>
//               <IoCartOutline size={30} /></Link>
//             </div>
//           </div>
//         </div>
//         <div className="flex gap-12 justify-center mb-4 bg-white sticky top-0">
//                         <Link to="womenwear">WOMEN</Link>
//                         <Link to="Menswear">MEN</Link>
//                         <Link to="kidswear">KIDS</Link>
//                         <Link to="fragnens">FRAGRANCES</Link>
//                         <Link to="musafir">MUSAFIR</Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-center justify-between px-5 py-3">
          
          <div className="flex items-center gap-2 text-sm mb-3 md:mb-0">
            <IoCallOutline size={16} />
            <Link to="/" className="text-center">
              +92(21)-36-111-685(MTJ)
            </Link>
          </div>

          
          <div className="flex justify-center mb-3 md:mb-0">
            <Link to="/">
              <img
                src="https://mtjonline.com/cdn/shop/files/720x240.png?v=1651040388"
                alt="logo-img"
                className="w-[150px] md:w-[200px]"
              />
            </Link>
          </div>

         
          <div className="flex items-center gap-4">
           
            <input
              type="text"
              placeholder="Search"
              className="hidden sm:block border-b border-black p-1 focus:outline-none"
            />

            
            <div className="flex gap-4">
              <Link to="/">
                <VscAccount size={24} />
              </Link>
              <Link to="/">
                <IoIosHeartEmpty size={24} />
              </Link>
              <Link to="/">
                <IoCartOutline size={24} />
              </Link>
            </div>

            
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex gap-6 justify-center bg-white border-t py-2`}
        >
          <Link to="womenwear" className="hover:text-red-600">
            WOMEN
          </Link>
          <Link to="Menswear" className="hover:text-red-600">
            MEN
          </Link>
          <Link to="kidswear" className="hover:text-red-600">
            KIDS
          </Link>
          <Link to="fragnens" className="hover:text-red-600">
            FRAGRANCES
          </Link>
          <Link to="musafir" className="hover:text-red-600">
            MUSAFIR
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
