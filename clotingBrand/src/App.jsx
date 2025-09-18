import React from "react";
import Slider from "./Components/Slider";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Product from "./Components/Product";
import Footer from "./Components/Footer";
import WomenWear from "./Components/WomenWear";
import MensWear from "./Components/MensWear";
import KidsWear from "./Components/KidsWear";
import Fragnens from "./Components/Fragnens";
import Musafir from "./Components/Musafir";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Navbar />
              <Hero />
              <Product />
              <WomenWear />
              <KidsWear />
              <MensWear />
              <Musafir />
              <Fragnens />
              <Footer />
            </>
          }
        />
        <Route
          path="/womenwear"
          element={
            <>
              <Navbar />
              <Hero />
              <WomenWear />
              <Footer />
            </>
          }
        />
        <Route
          path="/menswear"
          element={
            <>
              <Navbar />
              <Hero />
              <MensWear />
              <Footer />
            </>
          }
        />
        <Route
          path="/kidswear"
          element={
            <>
              <Navbar />
              <Hero />
              <KidsWear />
              <Footer />
            </>
          }
        />
        <Route
          path="/fragnens"
          element={
            <>
              <Navbar />
              <Hero />
              <Fragnens />
              <Footer />
            </>
          }
        />
        <Route
          path="/musafir"
          element={
            <>
              <Navbar />
              <Hero />
              <Musafir />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
