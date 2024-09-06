import React, { useEffect } from "react";
import Footer from "../../Components/Home/Footer";
import Navbar from "../../Components/Home/Navbar";
import aarti from '../../assets/aarti.jpg'; // Use this as a background image
import trishul from '../../assets/trishul.png'

const ContactUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen"> {/* Ensures full height with flex */}
        
        {/* Background image in this section */}
        <div className="relative w-full h-[80vh] bg-gray-900" style={{ backgroundImage: `url(${aarti})`, backgroundSize: 'cover', backgroundPosition: 'center' }}> 
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-white text-5xl md:text-8xl font-bold headings">
              Contact Us
            </h1>
            <img src={trishul} alt="" className="h-20 md:px-0 md:-ml-40  "/>
          </div>
        </div>

        <main className="flex-grow mt-4"> {/* Ensures the map and form take the remaining space */}
          <div className="relative md:h-[450px] h-[700px] md:h-[800px] mb-10">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 flex flex-col items-start justify-start mt-12">
                <div className="grid md:grid-cols-6 md:gap-20 mx-auto p-4 md:p-0 md:ml-32">
                  <div className="flex flex-col space-y-10 col-span-2">
                    <h1 className="uppercase text-5xl text-black"> {/* Change to black for visibility */}
                      Contact Us
                    </h1>
                    <p className="text-black text-xl font-semibold"> {/* Change to black for visibility */}
                      B-48A GF, Main Road, Kalka Ji
                      <br /> New Delhi – 110019
                    </p>
                    <p className="text-black text-xl font-semibold"> {/* Change to black for visibility */}
                      <br />Tel: +91 9582000035
                      <br />Email: support@redefinegroup.com
                    </p>
                  </div>
                  <div className="col-span-4">
                    <form className="max-w-full">
                      <div className="relative z-0 w-full mb-8 group">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          htmlFor="name"
                          className="peer-focus:font-medium absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Name
                        </label>
                      </div>
                      <div className="relative z-0 w-full mb-8 group">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          htmlFor="email"
                          className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Email
                        </label>
                      </div>
                      <div className="relative z-0 w-full mb-8 group">
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          htmlFor="phone"
                          className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Phone
                        </label>
                      </div>
                      <div className="relative z-0 w-full mb-8 group">
                        <textarea
                          name="message"
                          id="message"
                          className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          htmlFor="message"
                          className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Your Message
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="text-white float-right bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <iframe
              className="w-full mx-auto p-6 overflow-hidden"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14021.334908844325!2d77.23933369831319!3d28.529687102942304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1638ba50b35%3A0x4ecd5ee2a5c81b24!2sDDA%20Flats%20Kalkaji%2C%20Harijan%20Colony%2C%20Block%20B%2C%20Kalkaji%2C%20New%20Delhi%2C%20Delhi%20110019!5e0!3m2!1sen!2sin!4v1724747481095!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </main>
        <Footer /> {/* Footer should be at the end */}
      </div>
    </>
  );
};

export default ContactUsPage;
