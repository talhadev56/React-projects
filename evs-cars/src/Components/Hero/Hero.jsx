import React from 'react'
import arrowBtn from "../../assets/arrow_btn.png"


import "./Hero.css"
const Hero = ({heroData,playStatus,setPlayStatus,heroCount,setHeroCount}) => {
  return (
    <div className='hero'>
       <div className='heroText'>
         <p>{heroData.text1}</p>
         <p>{heroData.text2}</p>
       </div>
       <div className="heroExplore">
        <p>Explore the Features</p>
        <img src={arrowBtn} alt="" />
       </div>
       <div className="heroDotPlay">
        <ul className='heroDotContainer'>
          <li onClick={()=>setHeroCount(0)} className={heroCount===0?"heroDots orange":"heroDots"}></li>
         <li onClick={()=>setHeroCount(1)} className={heroCount===1?"heroDots orange":"heroDots"}></li>
            <li onClick={()=>setHeroCount(2)} className={heroCount===2?"heroDots orange":"heroDots"}></li>
        </ul>
       </div>
    </div>
  )
}

export default Hero