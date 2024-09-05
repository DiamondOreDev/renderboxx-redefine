import React, { useEffect } from "react";
import Sidebar from "../../Components/Home/Sidebar";
import Footer from "../../Components/Home/Footer";
import Navbar from "../../Components/Home/Navbar";

const ContactUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
     <Navbar/>
      <div className="relative  h-screen">
        <div className="relative w-full h-2/4">
          <img
            src="https://acegroupindia.com/images/contactus.jpg" // Replace with your image URL
            alt="About Us"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center mt-20">
            {/* <p className="text-gray-100 font-semibold text-2xl">
              DESIGNED FOR LIFE, DRIVEN BY INNOVATION
            </p> */}
            <h1 className="text-white text-5xl md:text-8xl ml-10 md:ml-0 font-bold headings">
              Contact US
            </h1>
          </div>
        </div>

        {/* Map */}

        <div className="w-full">
          <iframe
            className="w-[80vw] md:w-[91vw] mx-auto p-6 ml-20 overflow-hidden"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14021.334908844325!2d77.23933369831319!3d28.529687102942304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1638ba50b35%3A0x4ecd5ee2a5c81b24!2sDDA%20Flats%20Kalkaji%2C%20Harijan%20Colony%2C%20Block%20B%2C%20Kalkaji%2C%20New%20Delhi%2C%20Delhi%20110019!5e0!3m2!1sen!2sin!4v1724747481095!5m2!1sen!2sin"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div>
          <div className="relative md:h-[400px] h-[800px] mb-10">
            <div className="relative w-full h-full">
              <img
                src="https://lamoureuxarchitect.ca/wp-content/uploads/2022/04/joel-filipe-pyHPJEjUYHY-unsplash-scaled.jpg"
                alt="About Us"
                className="w-full h-full  object-cover"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-start mt-12">
                <div className="grid md:grid-cols-6 md:gap-20 ml-24 p-4 md:p-0 md:ml-32">
                  <div className="flex flex-col space-y-10 col-span-2">
                    <h1 className="uppercase headings text-5xl text-gray-100">
                      Contact Us
                    </h1>

                    <p className="text-gray-100 text-xl font-semibold">
                      B-48A GF, Main Road, Kalka Ji
                      <p> New Delhi – 110019</p>
                    </p>

                    <p className="text-gray-100 text-xl font-semibold">
                      <p>Tel : +91 9582000035</p>
                      <p>Email : support@redefinegroup.com</p>
                    </p>
                  </div>

                  <div className="col-span-4">
                    <form class="max-w-full ">
                      <div class="relative z-0 w-full mb-8 group">
                        <input
                          type="email"
                          name="floating_email"
                          id="floating_email"
                          class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-primary appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          for="floating_email"
                          class="peer-focus:font-medium absolute text-md text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Name
                        </label>
                      </div>
                      <div class="relative z-0 w-full mb-8 group">
                        <input
                          type="text"
                          name="floating_password"
                          id="floating_password"
                          class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-primary appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          for="floating_password"
                          class="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Email
                        </label>
                      </div>
                      <div class="relative z-0 w-full mb-8 group">
                        <input
                          type="text"
                          name="repeat_password"
                          id="floating_repeat_password"
                          class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-primary appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          for="floating_repeat_password"
                          class="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Phone
                        </label>
                      </div>

                      <div class="relative z-0 w-full mb-8 group">
                        <input
                          type="text"
                          name="floating_first_name"
                          id="floating_first_name"
                          class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-primary appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          for="floating_first_name"
                          class="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Your Message
                        </label>
                      </div>

                      <button
                        type="submit"
                        class="text-gray-900 float-right bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center   "
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
