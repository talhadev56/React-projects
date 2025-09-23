import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#132551ff] text-[#FAF9F6]'>
     <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 p-7">
      <div>
        <h2 className='text-3xl font-mono'>Evora</h2>
        <p className='text-lg text-justify m-3'>Evora is committed to shaping a greener tomorrow without compromising luxury. It’s where innovation meets elegance.</p>
        <button className='px-4 py-3 bg-black text-white rounded-lg hover:bg-[#111]'>Explore</button>
      </div>
      <div className='text-center mt-5 '>
        <ul className='p-3'>
            <li className='mb-2 cursor-pointer hover:underline'>Home</li>
             <li className='mb-2  cursor-pointer hover:underline'>Feautres</li>
             <li className='mb-2  cursor-pointer hover:underline'>About</li>
             <li className='mb-2 cursor-pointer hover:underline'>Contact</li>
             <li className='mb-2  cursor-pointer hover:underline'>Privacy</li>
        </ul>
      </div>
     <div className='text-center mt-5 '>
        <ul className='p-3'>
            <li className='mb-2  cursor-pointer hover:underline'>Contacts</li>
             <li className='mb-2 cursor-pointer hover:underline'>Company</li>
             <li className='mb-2 cursor-pointer hover:underline'>Our team</li>
             <li className='mb-2 cursor-pointer hover:underline'>Legal terms</li>
             <li className='mb-2 cursor-pointer hover:underline'>Site map</li>
        </ul>
      </div>
      <div className='text-center mt-5 '>
       <div className='capitalize p-3'>
        folow us on social media to stay updated 
       </div>
       <div className='cursor-pointer'>
        📺     💼    📸
       </div>
      </div>
      </div>
    </div>
  )
}

export default Footer