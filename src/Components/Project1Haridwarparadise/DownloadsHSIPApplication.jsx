import React from 'react';
import map from '../../assets/map.jpg';
import pdfFile from '../../assets/HSIP-Form.pdf'; // Replace with the path to your PDF

const DownloadsHSIPApplication = () => {
  return (
    <div>
      <div
        className="relative w-full h-60 bg-contain bg-center"
        style={{
          backgroundImage: `url(${map})`, 
        }}
      >
        {/* Hero Text */}
        <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl lg:text-4xl font-bold mb-4 headingp1">
              Download HSIP Application Form
            </h1>
            <a
              href={pdfFile} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg lg:text-2xl bg-p1 flex justify-center w-auto px-6 py-2 cursor-pointer rounded-lg text-white"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadsHSIPApplication;
