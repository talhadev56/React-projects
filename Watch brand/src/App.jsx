import React from "react";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Footer from "./components/Footer";
import WomenWatch from "./components/WomenWatch";
import CouWatches from "./components/CouWatches";
import Organizar from "./components/Organizar";
import { Route, Routes } from "react-router-dom";
import BrandShow from "./components/BrandShow";
import SmallPic from "./components/SmallPic";


const App = () => {
  return (
    <div>
      <Routes>
         <Route path="/" element={<>
         <Slider />
         <Navbar />
         <Hero />
         <SmallPic />
         <BrandShow />
         <Product />
         <WomenWatch />
         <CouWatches />
         <Organizar />
         <Footer />
         </>}/>
        <Route path="/product" element={<><Navbar /><Hero /><Product /><Footer /></>}/>
         <Route path="/womenwatch" element={<><Navbar /><Hero /><WomenWatch /><Footer /></>}/>
          <Route path="/couwatches" element={<><Navbar /><Hero /><CouWatches /><Footer /></>}/>
           <Route path="/organizar" element={<><Navbar /><Hero /><Organizar /><Footer /></>}/>
      </Routes>
     
    </div>
    
  );
};

export default App;
