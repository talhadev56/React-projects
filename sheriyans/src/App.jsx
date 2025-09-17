import React from "react";
import Nav from "./components/Nav";
import Courses from "./components/Courses";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";


const App = () => {

  return (
    <>
    
    <Routes>
      <Route path="/" element={
        <>
        <Nav />
        <Home />
        <LandingPage />
        <Courses />
        <About />
        <Footer />
        </>
      }/>
       <Route path="/Home" element={<Home />} />
       <Route path="/Courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/Request" element={<Request />} />
        
    </Routes>
    </>

  );
};

export default App;
