import React, { useRef } from "react";
import Slider from "react-slick";
import g1 from "../../assets/g1.jpg";
import g2 from "../../assets/g2.jpg";
import g3 from "../../assets/g3.jpg";
import g4 from "../../assets/g4.jpg";
import g5 from "../../assets/g5.jpg";
import g6 from "../../assets/g6.jpg";
import g7 from "../../assets/g7.jpg";
import g8 from "../../assets/g8.jpg";
import g9 from "../../assets/g9.jpg";
import g10 from "../../assets/g10.jpg";
import g11 from "../../assets/g11.jpg";
import g12 from "../../assets/g12.jpg";
import sd1 from "../../assets/sd1.jpg";
import sd2 from "../../assets/sd2.jpg";
import sd3 from "../../assets/sd3.jpg";
import sd4 from "../../assets/sd4.jpg";
import sd5 from "../../assets/sd5.jpg";
import sd6 from "../../assets/sd6.jpg";
import sd7 from "../../assets/sd7.jpg";
import sd8 from "../../assets/sd8.jpg";
import sd9 from "../../assets/sd9.jpg";
import sd10 from "../../assets/sd10.jpg";
import sd11 from "../../assets/sd11.jpg";
import sd12 from "../../assets/sd12.jpg";
import sd13 from "../../assets/sd13.jpg";
import sd14 from "../../assets/sd14.jpg";
import sd15 from "../../assets/sd15.jpg";
import sd16 from "../../assets/sd16.jpg";
import sd17 from "../../assets/sd17.jpg";
import sd18 from "../../assets/sd18.jpg";
import sd19 from "../../assets/sd19.jpg";
import gd1 from "../../assets/gd1.jpg";
import gd2 from "../../assets/gd2.jpg";
import gd3 from "../../assets/gd3.jpg";
import gd4 from "../../assets/gd4.jpg";
import gd5 from "../../assets/gd5.jpg";
import gd6 from "../../assets/gd6.jpg";
import gd7 from "../../assets/gd7.jpg";
import gd8 from "../../assets/gd8.jpg";
import gd9 from "../../assets/gd9.jpg";

// Main Image Carousel Data
const carouselImages = [
  { src: g1, alt: "Image 1", title: "GATE" },
  { src: g2, alt: "Image 2", title: "Club House" },
  { src: g3, alt: "Image 3", title: "Swimming Pool" },
  { src: g4, alt: "Image 4", title: "Kids Play Ground" },
  { src: g5, alt: "Image 5", title: "Central Park Anandvan" },
  { src: g6, alt: "Image 6", title: "Design your own house" },
  { src: g7, alt: "Image 7", title: "Wide Roads" },
  { src: g8, alt: "Image 8", title: "Plot of 100 Sqr Yards" },
  { src: g9, alt: "Image 9", title: "Farm House" },
  { src: g10, alt: "Image 10", title: "Clearly Denmarked Plots" },
  { src: g11 },
  { src: g12 },
  { src: sd1 },
  { src: sd2 },
  { src: sd3 },
];

const Gallery = () => {
  // Refs for the sliders
  const mainSliderRef = useRef(null);
  const thumbnailSliderRef = useRef(null);

  // Slick Carousel settings
  const mainSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust speed as needed
    fade: true,
    arrows: false, // Hide arrows for the main slider
    beforeChange: (current, next) => {
      // Sync the thumbnail slider when the main slider changes
      if (thumbnailSliderRef.current) {
        thumbnailSliderRef.current.slickGoTo(next);
      }
    },
  };

  const thumbnailSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "0",
    arrows: false, // Hide arrows for the thumbnail slider
    beforeChange: (current, next) => {
      // Sync the main slider when the thumbnail slider changes
      if (mainSliderRef.current) {
        mainSliderRef.current.slickGoTo(next);
      }
    },
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-center headingp1 text-5xl mb-4">Our Gallery</h1>

        {/* Top Main Carousel */}
        <div className="relative mb-8">
          <Slider {...mainSliderSettings} ref={mainSliderRef}>
            {carouselImages.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-1/2 h-[500px] object-cover mx-auto rounded-lg"
                />
                {/* <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-center py-2">
                  <p className="text-lg font-semibold">{image.title}</p>
                </div> */}
              </div>
            ))}
          </Slider>
        </div>

        {/* Bottom Thumbnail Carousel */}
        <div className="relative">
  <Slider {...thumbnailSliderSettings} ref={thumbnailSliderRef}>
    {carouselImages.map((image, index) => (
      <div
        key={index}
        className={`w-24 h-24 mx-4 cursor-pointer  overflow-hidden ${
          thumbnailSliderRef.current && thumbnailSliderRef.current.innerSlider
            ? thumbnailSliderRef.current.innerSlider.state.currentSlide === index
              ? 'border-blue-500 border-4'
              : 'border-transparent'
            : 'border-transparent'
        }`}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
    ))}
  </Slider>
</div>

      </div>
    </div>
  );
};

export default Gallery;
