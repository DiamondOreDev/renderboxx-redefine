import React from "react";

const Stats = () => {
  return (
    <>
      <div className="w-full">
        <div className="py-20 max-w-5xl flex flex-col  md:justify-between mx-auto items-center">
          <h1 className="text-5xl font-semibold text-center headings">Legacy moving forward</h1>
          <p className="text-gray-600 mt-6 text-center text-gray-800 px-10 md:px-0">
            In a considerably short period of time, Ace has achieved excellence,
            client satisfaction, and trust and has efficiently completed landmark
            projects without compromising on quality and timelines.
          </p>

          {/* Responsive Flex Container for Stats */}
          <div className="flex flex-wrap w-full justify-center md:justify-between items-center mt-10 gap-10">
            {/* Stat Item */}
            <div className="flex flex-col justify-center items-center w-40">
              <img
                src="https://acegroupindia.com/images/L-icoin-1.webp"
                alt="Years old legacy"
                className="w-16 h-16 mb-2"
              />
              <div className="text-center">
                <p className="font-bold text-xl">17+</p>
                <p className="text-gray-700">Years old legacy</p>
              </div>
            </div>

            {/* Stat Item */}
            <div className="flex flex-col justify-center items-center w-40">
              <img
                src="https://acegroupindia.com/images/L-icoin-2.webp"
                alt="Million sq. ft. of Projects"
                className="w-16 h-16 mb-2"
              />
              <div className="text-center">
                <p className="font-bold text-xl">12</p>
                <p className="text-gray-700">
                  Million sq. ft. of Projects Delivered and 50 acres of Ace Palm Floors Township
                </p>
              </div>
            </div>

            {/* Stat Item */}
            <div className="flex flex-col justify-center items-center w-40">
              <img
                src="https://acegroupindia.com/images/L-icoin-3.webp"
                alt="Ongoing projects"
                className="w-16 h-16 mb-2"
              />
              <div className="text-center">
                <p className="font-bold text-xl">17</p>
                <p className="text-gray-700">Million sq. ft. of Ongoing projects including JV's</p>
              </div>
            </div>

            {/* Stat Item */}
            <div className="flex flex-col justify-center items-center w-40">
              <img
                src="https://acegroupindia.com/images/L-icoin-4.webp"
                alt="Happy customers"
                className="w-16 h-16 mb-2"
              />
              <div className="text-center">
                <p className="font-bold text-xl">1000+</p>
                <p className="text-gray-700">Happy customers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-60 h-1 bg-primary mx-auto"></div>
      </div>
    </>
  );
};

export default Stats;
