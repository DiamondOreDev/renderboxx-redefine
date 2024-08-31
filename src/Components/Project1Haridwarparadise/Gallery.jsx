import React, { useState } from 'react';
import g1 from '../../assets/g1.jpg';
import g2 from '../../assets/g2.jpg';
import g3 from '../../assets/g3.jpg';
import g4 from '../../assets/g4.jpg';
import g5 from '../../assets/g5.jpg';
import g6 from '../../assets/g6.jpg';
import g7 from '../../assets/g7.jpg';
import g8 from '../../assets/g8.jpg';
import g9 from '../../assets/g9.jpg';
import g10 from '../../assets/g10.jpg';
import g11 from '../../assets/g11.jpg';
import g12 from '../../assets/g12.jpg';
import sd1 from '../../assets/sd1.jpg';
import sd2 from '../../assets/sd2.jpg';
import sd3 from '../../assets/sd3.jpg';
import sd4 from '../../assets/sd4.jpg';
import sd5 from '../../assets/sd5.jpg';
import sd6 from '../../assets/sd6.jpg';
import sd7 from '../../assets/sd7.jpg';
import sd8 from '../../assets/sd8.jpg';
import sd9 from '../../assets/sd9.jpg';
import sd10 from '../../assets/sd10.jpg';
import sd11 from '../../assets/sd11.jpg';
import sd12 from '../../assets/sd12.jpg';
import sd13 from '../../assets/sd13.jpg';
import sd14 from '../../assets/sd14.jpg';
import sd15 from '../../assets/sd15.jpg';
import sd16 from '../../assets/sd16.jpg';
import sd17 from '../../assets/sd17.jpg';
import sd18 from '../../assets/sd18.jpg';
import sd19 from '../../assets/sd19.jpg';
import gd1 from '../../assets/gd1.jpg';
import gd2 from '../../assets/gd2.jpg';
import gd3 from '../../assets/gd3.jpg';
import gd4 from '../../assets/gd4.jpg';
import gd5 from '../../assets/gd5.jpg';
import gd6 from '../../assets/gd6.jpg';
import gd7 from '../../assets/gd7.jpg';
import gd8 from '../../assets/gd8.jpg';
import gd9 from '../../assets/gd9.jpg';



// Categories and images data
const categories = [
  { id: 'all', name: 'All' },
  { id: 'photoGallery', name: 'Photo Gallery' },
  { id: 'siteDevelopment', name: 'Site Development' },
  { id: 'gardenDevelopment', name: 'Garden Development' },
];

const images = {
  all: [
    { src: g1, alt: 'Image 1', title: 'GATE' },
    { src: g2, alt: 'Image 2', title: 'Club House' },
    { src: g3, alt: 'Image 3', title: 'Swimming Pool' },
    { src: g4, alt: 'Image 4', title: 'Kids Play Ground' },
    { src: g5, alt: 'Image 5', title: 'Central Park Anandvan' },
    { src: g6, alt: 'Image 6', title: 'Design your own house' },
    { src: g7, alt: 'Image 7', title: 'Wide Roads' },
    { src: g8, alt: 'Image 8', title: 'Plot of 100 Sqr Yards' },
    { src: g9, alt: 'Image 9', title: 'Farm House' },
    { src: g10, alt: 'Image 10', title: 'Clearly Denmarked Plots' },
    { src: g11, alt: 'Image 11', title: 'Divine Living' },
    { src: g12, alt: 'Image 12', title: 'Enchanting Prayers' },
    { src: sd1, alt: 'Image 1' },
    { src: sd2, alt: 'Image 1' },
    { src: sd3, alt: 'Image 1' },
    { src: sd4, alt: 'Image 1' },
    { src: sd5, alt: 'Image 1' },
    { src: sd6, alt: 'Image 1' },
    { src: sd7, alt: 'Image 1' },
    { src: sd8, alt: 'Image 1' },
    { src: sd9, alt: 'Image 1' },
    { src: sd10, alt: 'Image 1' },
    { src: sd11, alt: 'Image 1' },
    { src: sd12, alt: 'Image 1' },
    { src: sd13, alt: 'Image 1' },
    { src: sd14, alt: 'Image 1' },
    { src: sd15, alt: 'Image 1' },
    { src: sd16, alt: 'Image 1' },
    { src: sd17, alt: 'Image 1' },
    { src: sd18, alt: 'Image 1' },
    { src: sd19, alt: 'Image 1' },
    {src : gd1 },
    {src : gd2 },
    {src : gd3 },
    {src : gd4 },
    {src : gd5 },
    {src : gd6 },
    {src : gd7 },
    {src : gd8 },
    {src : gd9 },
    
  ],
  photoGallery: [
    { src: g1, alt: 'Image 1', title: 'GATE' },
    { src: g2, alt: 'Image 2', title: 'Club House' },
    { src: g3, alt: 'Image 3', title: 'Swimming Pool' },
    { src: g4, alt: 'Image 4', title: 'Kids Play Ground' },
    { src: g5, alt: 'Image 5', title: 'Central Park Anandvan' },
    { src: g6, alt: 'Image 6', title: 'Design your own house' },
    { src: g7, alt: 'Image 7', title: 'Wide Roads' },
    { src: g8, alt: 'Image 8', title: 'Plot of 100 Sqr Yards' },
    { src: g9, alt: 'Image 9', title: 'Farm House' },
    { src: g10, alt: 'Image 10', title: 'Clearly Denmarked Plots' },
    { src: g11, alt: 'Image 11', title: 'Divine Living' },
    { src: g12, alt: 'Image 12', title: 'Enchanting Prayers' },
  ],
  siteDevelopment: [
    { src: sd1, alt: 'Image 1' },
    { src: sd2, alt: 'Image 1' },
    { src: sd3, alt: 'Image 1' },
    { src: sd4, alt: 'Image 1' },
    { src: sd5, alt: 'Image 1' },
    { src: sd6, alt: 'Image 1' },
    { src: sd7, alt: 'Image 1' },
    { src: sd8, alt: 'Image 1' },
    { src: sd9, alt: 'Image 1' },
    { src: sd10, alt: 'Image 1' },
    { src: sd11, alt: 'Image 1' },
    { src: sd12, alt: 'Image 1' },
    { src: sd13, alt: 'Image 1' },
    { src: sd14, alt: 'Image 1' },
    { src: sd15, alt: 'Image 1' },
    { src: sd16, alt: 'Image 1' },
    { src: sd17, alt: 'Image 1' },
    { src: sd18, alt: 'Image 1' },
    { src: sd19, alt: 'Image 1' },
  ],
  gardenDevelopment: [
    {src : gd1 },
    {src : gd2 },
    {src : gd3 },
    {src : gd4 },
    {src : gd5 },
    {src : gd6 },
    {src : gd7 },
    {src : gd8 },
    {src : gd9 },
  ],
};

// Gallery Component
const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="py-16 ">
      <div className="container mx-auto px-6">
      <h1 className="text-center headingp1 text-5xl mb-4">Our Gallary</h1>
        {/* Category Buttons */}
        <div className="flex justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 m-2 rounded-lg border-2 ${
                activeCategory === category.id ? 'bg-p1 text-white' : 'bg-white text-gray-800'
              } border-p1`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {images[activeCategory].map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg"
            >
              {/* Actual Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto transition-transform duration-500 ease-in-out transform group-hover:scale-105"
              />

              {/* Title Below Image */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                <p className="transition-all text-sm duration-300 ease-in-out group-hover:text-white  group-hover:underline-offset-4">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
