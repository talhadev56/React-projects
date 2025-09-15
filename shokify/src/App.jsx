import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Product from "./components/Product.jsx";
import TopProduct from "./components/TopProduct.jsx";
import Banner from "./components/Banner.jsx";
import Subscribe from "./components/Subscribe.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Footer from "./components/Footer.jsx";
import KidsSection from "./components/KidsSection.jsx";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Hero />
              <Product />
              <TopProduct />
              <Banner />
              <KidsSection />
              <Subscribe />
              <Testimonial />
              <Footer />
            </>
          }
        />
        <Route path="/topproduct" element={<><Navbar /><TopProduct /><Footer /></>}/>
        <Route path="/product" element={<><Navbar /><Product /><Footer /></>}/>
         <Route path="/kidssection" element={<><Navbar /><KidsSection /><Footer /></>}/>
          <Route path="/banner" element={<><Navbar /><Banner /><Footer /></>}/>

        
      </Routes>
    </div>
  );
};

export default App;
