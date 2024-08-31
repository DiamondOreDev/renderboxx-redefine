import React from "react";

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.haridwarparadise.com/images/slide-8.jpg')",
      }}
    >
      {/* Hero Text */}
      <div className="absolute bottom-10 left-10 text-white">
        <h1 className="text-4xl lg:text-4xl font-bold mb-4 headingp1">
          Discover the grandeur of Haridwar Paradise
        </h1>
        <p className="text-lg lg:text-2xl ">
          Design whispers elegance and tranquility.
        </p>
      </div>
    </div>
  );
};

export default Hero;
