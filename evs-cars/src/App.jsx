import React from 'react'
import { useState } from 'react';
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import { useEffect } from 'react';
import Features from './Components/Features';
import About from './Components/About';
import Footer from './Components/Navbar/Footer';




const App = () => {
  let heroData =[
    {text1: "Dive into",text2: "What you Loves"},
    {text1: "Indulges",text2: "Yours passion"},
    {text1: "Give in to",text2: "Your Passion"},
  ];
  const [heroCount, setHeroCount] = useState(0);
  

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count)=>{return count===2?0:count+1})
    }, 4000);
  }, [])
  
  return (
    <div>
    <Background  heroCount={heroCount}  />
    <Navbar />
    <Hero  heroData={heroData[heroCount]} heroCount={heroCount}  setHeroCount={setHeroCount}/>
   <Features />
   <About />
   <Footer />
    </div>
  )
}

export default App