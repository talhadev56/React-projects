import React, { useEffect, useRef, useState } from 'react'
import video1 from '../assets/video1.mp4'
import image1 from '../assets/play_icon.png'
import image2 from '../assets/pause_icon.png'

const About = () => {
    let [playbtn, setPlaybtn] = useState(false); 
    const vedioRef = useRef(null);

    useEffect(() => {
        if (vedioRef.current) {
            if (playbtn) {
                vedioRef.current.play();
            } else {
                vedioRef.current.pause();
            }
        }
    }, [playbtn]); 

    return (
        <div className='bg-[#06080d] text-white lg:p-10 text-center pb-32'>
            <h1 className='text-4xl font-bold mt-5 mb-5'>ABOUT US</h1>
            <p className='text-lg text-[#db7a06] mt-5 mb-10 text-justify m-28 grid'>
                <span className='text-xl text-[#fff] font-semibold'>Evora</span> is a premium electric car brand redefining the future of luxury mobility. Built on innovation, elegance, and cutting-edge technology, Evora delivers a driving experience that blends high performance with sustainable design. Every Evora vehicle is crafted with precision, offering silent yet powerful acceleration, advanced smart features, and world-class comfort. With a focus on eco-conscious engineering and timeless aesthetics, Evora represents more than just a car — it’s a lifestyle choice for those who demand sophistication and pure driving pleasure . Quality is our siginificance Evora is the name of quality.
            </p>
            <video className='w-[80%] mx-auto rounded-md z-1' ref={vedioRef}> 
                <source src={video1} />
            </video>
            <div className='flex justify-center mt-5'>
                <img
                    src={playbtn ? image2 : image1}
                    alt={playbtn ? "Pause" : "Play"}
                    className='mt-4 w-16'
                    onClick={() => setPlaybtn(!playbtn)}
                />
                <p className='mt-10 ml-3 text-lg'>See the vedio</p>
            </div>
        </div>
    )
}

export default About