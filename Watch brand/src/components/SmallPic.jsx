import React from 'react'
import { Link } from 'react-router-dom'

const SmallPic = () => {
  return (
    <>
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 p-5 gap-5'>
        <div>
           <Link to="/product"> <img src="https://currenwatches.com.pk/cdn/shop/collections/1_2346282f-efb0-4729-b42d-c1457900ef82.png?v=1752312175&width=400" alt="brand-img"  className='rounded-[50%] border-1 border-gray-400 border-solid hover:border-2 hover:border-black hover:border-solid  shadow-md hover:scale-110 duration-200'/></Link>
            <p className='text-center mt-3'>Mens Formal</p>
        </div>
         <div>
            <Link to="/product"><img src="https://currenwatches.com.pk/cdn/shop/collections/2_79f9b499-09f6-48f6-8c11-d38b33d40527.png?v=1752312244&width=400" alt="brand-img"  className='rounded-[50%] border-1 border-gray-400 border-solid hover:border-2 hover:border-black hover:border-solid  shadow-md hover:scale-110 duration-200' /></Link>
            <p  className='text-center mt-3'>Mens Sports</p>
        </div>
        <div>
            <Link to="/product"><img src="https://currenwatches.com.pk/cdn/shop/collections/2_40419bf5-93bc-47c4-9e46-7f088236afd8.png?v=1752312214&width=400" alt="brand-img"  className='rounded-[50%] border-1 border-gray-400 border-solid hover:border-2 hover:border-black hover:border-solid  shadow-md hover:scale-110 duration-200' /></Link>
            <p  className='text-center mt-3'>Mens Chronograph</p>
        </div>
        <div>
            <Link to="/WomenWatch"><img src="https://currenwatches.com.pk/cdn/shop/collections/4_1b42c12f-e020-491c-8fdb-0118530eaaff.png?v=1752312307&width=400" alt="brand-img"  className='rounded-[50%] border-1 border-gray-400 border-solid hover:border-2 hover:border-black hover:border-solid  shadow-md hover:scale-110 duration-200'/></Link>
            <p className='text-center mt-3'>Womens Fancy</p>
        </div>
        
        <div>
            <Link to="/WomenWatch"><img src="https://currenwatches.com.pk/cdn/shop/collections/5_9fdeade6-12f1-418c-851a-9432b02e04c0.png?v=1752312271&width=400" alt="brand-img" className='rounded-[50%] border-1 border-gray-400 border-solid hover:border-2 hover:border-black hover:border-solid  shadow-md hover:scale-110 duration-200'/></Link>
            <p  className='text-center mt-3'>Womens Bracelet</p>
        </div>
        <div>
            <Link to="/CouWatches"><img src="https://currenwatches.com.pk/cdn/shop/collections/c5_1134e2ce-6f98-4b14-bce5-fe93f71b6f78.jpg?v=1752487300&width=400" alt="brand-img"  className='rounded-[50%] border-1 border-gray-400 border-solid hover:border-2 hover:border-black hover:border-solid  shadow-md hover:scale-110 duration-200'/></Link>
            <p  className='text-center mt-3'>Couples Watches</p>
        </div>

    </div>
    </>
  )
}

export default SmallPic