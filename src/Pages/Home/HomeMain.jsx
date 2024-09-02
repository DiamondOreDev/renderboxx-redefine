import React, { useEffect } from "react";
import Sidebar from "../../Components/Home/Sidebar";
import HeroCarousel from "../../Components/Home/HeroCarousel";
import Stats from "../../Components/Home/Stats";
import AboutusSection from "../../Components/Home/AboutusSection";
import Awards from "../../Components/Home/Awards";
import ContactUs from "../../Components/Home/ContactUs";
import Testimonials from "../../Components/Home/Testimonials";
import Footer from "../../Components/Home/Footer";
import Projects from "../../Components/Home/Projects";

const HomeMain = () => {

    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      <div className="flex   ">
        {/* Sidebar (fixed and narrow on the left) */}
        <Sidebar />

        {/* Hero Carousel (flex-grow to occupy remaining space) */}
        <div className="flex-grow ml-20">
          <HeroCarousel />
          <Stats/>
          <AboutusSection/>
          <Projects/>
          <Awards/>
          {/* <Testimonials/> */}
          <ContactUs/>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
