import React from 'react'
import { GrSecure } from "react-icons/gr";
import { FaShippingFast } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdLocalOffer } from "react-icons/md";

const Banner = () => {
  return (
    <>
    <section className='mt-32 mb-32'>
     <div className="max-w-[1170px] m-auto ">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
       <div className='mx-auto'>
        <img src="https://media.istockphoto.com/id/1189091313/photo/handsome-man-shopping-for-new-clothes-in-store.jpg?s=612x612&w=0&k=20&c=TxJ4B339e64K70sFgw3RU1xDsi7N0LDBZyT9pB29H64=" alt="img" className='w-[400px] h-[300px] rounded-xl shadow-xl'/>
       </div>
       <div className='sm:m-10 m-10 lg:m-0'>
        <h1 className='capitalize font-bold text-2xl'> winter sale upto 50% off</h1>
        <p className='mt-1 mb-3 text-gray-500'>Exclusive sale offers unbeatable discounts, premium quality, trendy styles, and guaranteed value for money shopping.</p>

         <ul className="grid gap-2 mt-2">
      <li className="flex items-center gap-3 p-2 rounded-xl">
        <span className="p-2 bg-red-400 rounded-lg text-white">
          <GrSecure size={22} />
        </span>
        <span className="font-medium">Quality Products</span>
      </li>

      <li className="flex items-center gap-3 p-2 rounded-xl ">
        <span className="p-2 bg-yellow-400 rounded-lg text-white">
          <FaShippingFast size={22} />
        </span>
        <span className="font-medium">Fast Delivery</span>
      </li>

      <li className="flex items-center gap-3 p-2 rounded-xl ">
        <span className="p-2 bg-purple-400 rounded-lg text-white">
          <RiSecurePaymentFill size={22} />
        </span>
        <span className="font-medium">Easy Payment</span>
      </li>

      <li className="flex items-center gap-3 p-2  rounded-xl ">
        <span className="p-2 bg-green-400 rounded-lg text-white">
          <MdLocalOffer size={22} />
        </span>
        <span className="font-medium">Exciting Offers</span>
      </li>
    </ul>
       </div>
        </div>
     </div>
    </section>
    </>
  )
}

export default Banner