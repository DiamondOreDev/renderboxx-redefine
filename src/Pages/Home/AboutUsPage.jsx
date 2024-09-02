import React, { useEffect } from "react";
import aboutimage from "../../assets/aboutimage.jpg";
import Sidebar from "../../Components/Home/Sidebar";
import Footer from "../../Components/Home/Footer";

const AboutUsPage = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  
  return (
    <>
      <Sidebar />
      <div className="relative ml-20 overflow-hidden h-screen">
        <div className="relative w-[332px] md:w-full  h-2/3">
          <img
            src={aboutimage} // Replace with your image URL
            alt="About Us"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center mx-auto  mt-20">
            <p className="text-gray-100 font-semibold text-sm   md:text-2xl text-wrap">
              DESIGNED FOR LIFE, DRIVEN BY INNOVATION
            </p>
            <h1 className="text-white text-5xl md:text-8xl font-bold headings">ABOUT US</h1>
          </div>
        </div>

        <div className="   ">
          {/* Comapany profile */}
          <div>
            <p className="text-lg p-4 md:p-8">
              <h1 className="headings text-6xl ">COMPANY PROFILE</h1>
              <div className="w-40 h-1 bg-primary mb-6"></div>
              <p className="text-xl text-justify">
                Over 17 years, Redefine Group has single mindedly focused on
                innovative ideas. Taking ordinary spaces and transforming them
                into something spectacular. Redefine group is leading real
                estate organisation based in Delhi and in Uttrakhand. It was
                incorporated in year 2006. The company was founded by Mr Chander
                Mohan. Chander Mohan is the managing director of the company
                ,till date company has done more than 2 lac sq ft of plots and
                real estate development in Delhi ,Ncr, Uttrakhand,Bhopal,
                Rajasthan, vrindavan,Goa etc They have delivered 6 + projects
                including plots and residential. The company are currently
                executing 70 Acre township in Haridwar in the name of Haridwar
                paradise and upcoming projects in Rishikesh and in Devprayag.
              </p>
            </p>
          </div>

          {/* Media Coverage  */}

          <div className="mt-20 p-8">
            <h1 className="headings text-6xl ">MEDIA COVERAGE</h1>
            <div className="w-full md:w-40 h-1 bg-primary mb-10"></div>

            <img
              src="https://redefinegroup.com/images/Media-Coverage.jpg"
              alt=""
            />
          </div>

          {/* WORDS FROm CHAIRUMAN */}

            <div className="mt-10 p-4 md:p-8">

            <h1 className="headings text-5xl md:text-6xl uppercase">Sovereignty</h1>
            <div className="w-40 h-1 bg-primary mb-10"></div>

                <div className="grid md:grid-cols-6 gap-4">

                    <div className="col-span-4 text-justify text-lg text-gray-700">

                        <p>Founded by Mr Chander Mohan, the Redefine Group has a leading presence across real estate, financial services, e-commerce, software, and health care.</p>
                        <p>The Redefine Group strongly believes that it has a pivotal role to play in shaping the lives of ordinary people to transform them into someone extra-ordinary. Through its various consumer-facing businesses, the Group provides a robust platform to every Indian to realize their potential and lead a lifestyle which everyone desires for.</p>
                        <p>Mr. Chander Mohan, born on 27 May 1984, in Etawah, UP. He is the younger son of the visionary Shri Hotilal and lives with his family in Delhi. Graduated (B.Tech. in Electronics and Communications) BTEC – HIGHER NATIONAL DIPLOMA (HND) In Electrical/Electronic Engineering, U.K. Edxcel</p>
                    </div>

                    <div className="flex flex-col col-span-2">
                        <img src="" alt="" className=" " />
                        <p className="font-bold text-2xl headings">Mr. Chander Mohan</p>
                    </div>

                </div>


            </div>

            <Footer/>

        </div>
      </div>
     
    </>
  );
};

export default AboutUsPage;
