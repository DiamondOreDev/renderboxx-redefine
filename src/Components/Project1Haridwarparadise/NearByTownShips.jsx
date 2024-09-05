import React from "react";
import nbt1 from "../../assets/nbt1.jpg";
import nbt2 from "../../assets/nbt2.jpg";
import nbt3 from "../../assets/nbt3.jpg";
import nbt4 from "../../assets/nbt4.jpg";
import nbt5 from "../../assets/nbt5.jpg";
import nbt6 from "../../assets/nbt6.jpg";
import nbt7 from "../../assets/nbt7.jpg";

const NearByTownShips = () => {
  const features = [
    {
      image: nbt1,
      description: "Baba Ramdev Residence 0.7 kms",
    },
    {
      image: nbt2,
      description: "Patanjali Yogpeeth 1.4 Kms",
    },
    {
      image: nbt3,
      description: "Har-ki-Pauri",
    },
    // Add more feature objects as needed

    {
      image: nbt4,
      description: "Mansa Devi Temple",
    },
    {
      image: nbt5,
      description: "Neelkanth Mahadev Temple",
    },
    {
      image: nbt6,
      description: "Ram & Lakshman Jhula",
    },

    {
      image: nbt7,
      description: "Neel Dhara Pakshi Vihar",
    },
  ];
  return (
    <>
      <section className="py-10 md:py-16 ">
        <div className=" px-0">
          <h1 className="text-center headingp1 text-5xl mb-2">
            Near By Attraction
          </h1>
          <div className="h-1 w-80 bg-p1 mx-auto mb-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="relative group overflow-hidden h-48">
                <img
                  src={feature.image}
                  alt={`Feature ${index + 1}`}
                  className="w-full h-full object-cover grayscale transition-transform duration-500 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black bg-opacity-60 text-white p-4 transition-transform duration-500 ease-in-out transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 flex items-end">
                  <p className="text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NearByTownShips;
