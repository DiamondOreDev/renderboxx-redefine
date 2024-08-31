import React from "react";
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

// Array of feature objects
const features = [
  {
    image: f1,
    description: "24 x 7 Security through CCTV Camera",
  },
  {
    image: f2,
    description: "Wide Roads",
  },
  {
    image: f3,
    description: "Water Fountain",
  },
  // Add more feature objects as needed

  {
    image: f4,
    description: "Street Lights",
  },
  {
    image: f5,
    description: "Clearly demarked plots",
  },
  {
    image: f6,
    description: "Farm Houses",
  },

  {
    image: f7,
    description: "Swimming Pool",
  },

  {
    image: f8,
    description: "Club House",
  },
  {
    image: f9,
    description: "Indoor Games",
  },

  {
    image: f10,
    description: "Spa and Gymnasium",
  },

  {
    image: f11,
    description: "Yoga Hall",
  },

  {
    image: f12,
    description: "Meditation Centre",
  },

  {
    image: f13,
    description: "Multipurpose Hall",
  },

  {
    image: f14,
    description: "Central Park with Kids Play Area",
  },

  {
    image: f15,
    description: "Lots of open spaces and greenery",
  },

  {
    image: f16,
    description: "Temple",
  },

  {
    image: f17,
    description: "Neighbours",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-16 ">
      <div className=" px-0">
        <h1 className="text-center headingp1 text-6xl mb-2">Township Features</h1>
        <div className="h-1 w-80 bg-p1 mx-auto mb-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="relative group overflow-hidden h-80">
              <img
                src={feature.image}
                alt={`Feature ${index + 1}`}
                className="w-full h-full object-cover grayscale transition-transform duration-500 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black bg-opacity-60 text-white p-4 transition-transform duration-500 ease-in-out transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 flex items-end">
                <p className="text-lg">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
