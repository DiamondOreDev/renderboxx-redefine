// src/components/HeroCarousel.js

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    url: "https://acegroupindia.com/img/slider/slide1.webp",
    heading: "WE BUILD TOGETHER",
  },
  {
    url: "https://acegroupindia.com/img/slider/ace-153-banner-1.webp",
    heading: "JOIN OUR JOURNEY",
  },
  {
    url: "https://acegroupindia.com/img/slider/ace-terra-banner-home.webp",
    heading: "EXPERIENCE INNOVATION",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to handle the slide change
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Automatically change slides every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 3000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="relative  h-screen overflow-hidden">
      <AnimatePresence>
        {images.map(
          (image, index) =>
            index === currentSlide && (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.75 }}
                className="absolute w-full h-full"
              >
                {/* Image */}
                <img
                  src={image.url}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Heading with Animation */}
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75 }}
                  className="absolute  headings inset-0 flex flex-col items-center justify-center text-white text-7xl font-bold text-center"
                >
                  {image.heading}
                  <p className="bg-primary rounded-md px-10 py-2 text-gray-700 text-lg mt-4">
                    Explore More
                  </p>
                </motion.h1>
              </motion.div>
            )
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroCarousel;
