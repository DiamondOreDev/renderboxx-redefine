import React from "react";

const Stats = () => {
  return (
    <>
      <div className="w-full">
        <div className="py-20 max-w-5xl flex flex-col  md:justify-between mx-auto items-center">
          <h1 className="text-5xl font-semibold text-center headings">
            Legacy moving forward
          </h1>
          <p className="text-gray-600 mt-6 text-center text-gray-800 px-10 md:px-0">
            In a considerably short period of time, Ace has achieved excellence,
            client satisfaction, and trust and has efficiently completed
            landmark projects without compromising on quality and timelines.
          </p>

          {/* Responsive Flex Container for Stats */}
          <div className="flex flex-wrap w-full justify-center md:justify-between items-start mt-10 gap-10">
            {/* Stat Item */}
            <div className="flex flex-col justify-center items-center w-40">
              <svg
                class="w-10 h-10 mb-2 text-primary"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <circle cx="12" cy="12" r="9" />{" "}
                <polyline points="12 7 12 12 15 15" />
              </svg>
              {/* <img
                src="https://acegroupindia.com/images/L-icoin-1.webp"
                alt="Years old legacy"
                className="w-16 h-16 mb-2"
              /> */}
              <div className="text-center">
                <p className="font-bold text-xl">17+</p>
                <p className="text-gray-700">Years old legacy</p>
              </div>
            </div>

            {/* Stat Item */}
            <div className="flex flex-col justify-center items-center w-40">
              <svg
                class="w-10 h-10 mb-2 text-primary"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
              </svg>
              {/* <img
                src="https://acegroupindia.com/images/L-icoin-2.webp"
                alt="Million sq. ft. of Projects"
                className="w-16 h-16 mb-2"
              /> */}
              <div className="text-center">
                <p className="font-bold text-xl">12</p>
                <p className="text-gray-700">
                  Million sq. ft. of Projects Delivered and 50 acres of Ace Palm
                  Floors Township
                </p>
              </div>
            </div>

            {/* Stat Item */}
            <div className="flex flex-col justify-center items-center w-40">
              <svg
                class="w-10 h-10 mb-2 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>

              {/* <img
                src="https://acegroupindia.com/images/L-icoin-3.webp"
                alt="Ongoing projects"
                className="w-16 h-16 mb-2 "
              /> */}
              <div className="text-center">
                <p className="font-bold text-xl">17</p>
                <p className="text-gray-700">
                  Million sq. ft. of Ongoing projects including JV's
                </p>
              </div>
            </div>

            {/* Stat Item */}
            <div className="flex flex-col justify-center items-center w-40">
              <svg
                class="h-8 w-8 mb-2 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
              </svg>
              {/* <img
                src="https://acegroupindia.com/images/L-icoin-4.webp"
                alt="Happy customers"
                className="w-16 h-16 mb-2"
              /> */}
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
