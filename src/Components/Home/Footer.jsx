import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A]">
      <div className="w-full p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex flex-col max-w-lg">
              <h1 className="text-4xl text-gray-100 headings">REDEFINE GROUP</h1>
              <p className="text-gray-100 mt-6 text-justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor quod asperiores tempore deserunt unde inventore ipsam enim. Ratione quibusdam qui tenetur, perspiciatis veritatis quae rem voluptatem quas nostrum consectetur voluptate?
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 md:ml-40 ml-0">
            <div>
              <h2 className="mb-6 text-lg font-semibold text-gray-100 uppercase">CONTACT INFORMATION</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline flex items-start text-gray-200 text-sm">
                    <svg className="h-6 w-6 text-gray-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    B-48A GF, Main Road, Kalka Ji New Delhi – 110019
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline flex text-gray-100">
                    <svg className="h-6 w-6 text-gray-600 mr-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                    +91 9582000035
                  </a>
                </li>
              </ul>
            </div>

            <div className="ml-4 md:ml-20">
              <h2 className="mb-6 text-lg font-semibold text-gray-100 uppercase">FOLLOW US</h2>
              <ul className="text-gray-500 font-medium">
                <div className="flex flex-wrap space-x-4">
                  <div className="bg-gray-600 p-2">
                    <svg className="h-6 w-6 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </div>
                  <div className="bg-gray-600 p-2">
                    <svg className="h-6 w-6 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
