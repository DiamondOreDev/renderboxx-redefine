import React, { useState } from "react";
import f1 from "../../assets/f1.jpg";
import f2 from "../../assets/f2.jpg";
import f3 from "../../assets/f3.jpg";
import f4 from "../../assets/f4.jpg";
import f5 from "../../assets/f5.jpg";
import f6 from "../../assets/f6.jpg";
import f7 from "../../assets/f7.jpg";
import f8 from "../../assets/f8.jpg";
import f9 from "../../assets/f9.jpg";
import f10 from "../../assets/f10.jpg";
import f11 from "../../assets/f11.jpg";
import f12 from "../../assets/f12.jpg";
import f13 from "../../assets/f13.jpg";
import f14 from "../../assets/f14.jpg";
import f15 from "../../assets/f15.jpg";
import f16 from "../../assets/f16.jpg";
import f17 from "../../assets/f17.jpg";
import trishul from '../../assets/trishul.png'

// Array of feature objects
const features1 = [
  { image: f1, description: "24 x 7 Security through CCTV Camera" },
  { image: f2, description: "Wide Roads" },
  { image: f3, description: "Water Fountain" },
  { image: f4, description: "Street Lights" },
  { image: f5, description: "Clearly demarked plots" },
  { image: f6, description: "Farm Houses" },
  { image: f7, description: "Swimming Pool" },
  { image: f8, description: "Club House" },
];

const features2 = [
  { image: f9, description: "Indoor Games" },
  { image: f10, description: "Spa and Gymnasium" },
  { image: f11, description: "Yoga Hall" },
  { image: f12, description: "Meditation Centre" },
  { image: f13, description: "Multipurpose Hall" },
  { image: f14, description: "Central Park with Kids Play Area" },
  { image: f15, description: "Lots of open spaces and greenery" },
  { image: f16, description: "Temple" },
];

const FeatureSection = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleClick = (feature) => {
    setSelectedFeature(feature);
  };

  const handleClose = () => {
    setSelectedFeature(null);
  };

  const circleRadius = 220; // Adjust radius for more or fewer images
  const imageSize = 150; // Image size (height and width)


  

  return (
    <section className="py-16 px-24 flex flex-col md:flex items-center h-auto md:h-screen">
      <div className="relative flex justify-center items-center">
        {/* Center text */}
        <div className="absolute z-20 text-4xl font-bold headingp1">
          Township 
        </div>

        {/* Circular layout for images */}
        <div className="relative group"
          style={{ width: `${circleRadius * 2}px`, height: `${circleRadius * 2}px` }}
        >
          <div className="absolute inset-0 flex justify-center items-center">
            {features1.map((feature, index) => {
              const angle = (index / features1.length) * 360;
              const x = circleRadius + circleRadius * Math.cos((angle * Math.PI) / 180) - imageSize / 2;
              const y = circleRadius + circleRadius * Math.sin((angle * Math.PI) / 180) - imageSize / 2;

              return (
                <div
                  key={index}
                  className="absolute rounded-full overflow-hidden border-4 border-white cursor-pointer"
                  style={{
                    width: `${imageSize}px`,
                    height: `${imageSize}px`,
                    top: `${y}px`,
                    left: `${x}px`,
                    transform: `rotate(${angle}deg)`,
                    transition: "transform 0.3s ease-in-out",
                  }}
                  onClick={() => handleClick(feature)}
                >
                  <img
                    src={feature.image}
                    alt={`Feature ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </div>
              );
            })}
          </div>
          <div className="transition-transform duration-500 ease-in-out">
            {/* Rotating container */}
            <div
              className="relative"
              style={{ width: `${circleRadius * 2}px`, height: `${circleRadius * 2}px` }}
            >
              {features1.map((feature, index) => {
                const angle = (index / features1.length) * 360;
                const x = circleRadius + circleRadius * Math.cos((angle * Math.PI) / 180) - imageSize / 2;
                const y = circleRadius + circleRadius * Math.sin((angle * Math.PI) / 180) - imageSize / 2;

                return (
                  <div
                    key={index}
                    className="absolute rounded-full overflow-hidden border-4 border-white cursor-pointer"
                    style={{
                      width: `${imageSize}px`,
                      height: `${imageSize}px`,
                      top: `${y}px`,
                      left: `${x}px`,
                      transform: `rotate(${angle}deg)`,
                      transition: "transform 0.3s ease-in-out",
                    }}
                    onClick={() => handleClick(feature)}
                  >
                    <img
                      src={feature.image}
                      alt={`Feature ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>


      <img src={trishul} alt="" className="-rotate-90 w-60" />
      <div className="relative flex justify-center items-center">
        {/* Center text */}
        <div className="absolute z-20 text-4xl font-bold headingp1">
          Features
        </div>

        {/* Circular layout for images */}
        <div className="relative group"
          style={{ width: `${circleRadius * 2}px`, height: `${circleRadius * 2}px` }}
        >
          <div className="absolute inset-0 flex justify-center items-center">
            {features2.map((feature, index) => {
              const angle = (index / features2.length) * 360;
              const x = circleRadius + circleRadius * Math.cos((angle * Math.PI) / 180) - imageSize / 2;
              const y = circleRadius + circleRadius * Math.sin((angle * Math.PI) / 180) - imageSize / 2;

              return (
                <div
                  key={index}
                  className="absolute rounded-full overflow-hidden border-4 border-white cursor-pointer"
                  style={{
                    width: `${imageSize}px`,
                    height: `${imageSize}px`,
                    top: `${y}px`,
                    left: `${x}px`,
                    transform: `rotate(${angle}deg)`,
                    transition: "transform 0.3s ease-in-out",
                  }}
                  onClick={() => handleClick(feature)}
                >
                  <img
                    src={feature.image}
                    alt={`Feature ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </div>
              );
            })}
          </div>
          <div className=" transition-transform duration-500 ease-in-out">
            {/* Rotating container */}
            <div
              className="relative"
              style={{ width: `${circleRadius * 2}px`, height: `${circleRadius * 2}px` }}
            >
              {features2.map((feature, index) => {
                const angle = (index / features2.length) * 360;
                const x = circleRadius + circleRadius * Math.cos((angle * Math.PI) / 180) - imageSize / 2;
                const y = circleRadius + circleRadius * Math.sin((angle * Math.PI) / 180) - imageSize / 2;

                return (
                  <div
                    key={index}
                    className="absolute rounded-full overflow-hidden border-4 border-white cursor-pointer"
                    style={{
                      width: `${imageSize}px`,
                      height: `${imageSize}px`,
                      top: `${y}px`,
                      left: `${x}px`,
                      transform: `rotate(${angle}deg)`,
                      transition: "transform 0.3s ease-in-out",
                    }}
                    onClick={() => handleClick(feature)}
                  >
                    <img
                      src={feature.image}
                      alt={`Feature ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Expanded View */}
      {selectedFeature && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-30"
          onClick={handleClose}
        >
          <div
            className="relative p-8 bg-white rounded-lg"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing
          >
            <button
              className="absolute top-2 right-2 text-3xl font-bold text-gray-800"
              onClick={handleClose}
            >
              &times;
            </button>
            <img
              src={selectedFeature.image}
              alt="Selected Feature"
              className="w-96 h-96 object-cover rounded-full"
            />
            <p className="text-center text-lg font-semibold mt-4">{selectedFeature.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeatureSection;
