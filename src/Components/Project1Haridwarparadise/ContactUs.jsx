import React from "react";

const ContactUs = () => {
  return (
    <>
    <section class="" id="contact">
      <div class="mx-auto  px-4 py-16 sm:px-6 lg:px-8 lg:py-10">
        <div class="mb-4">
          <div class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <h2 class="font-heading headingp1 mb-4 font-bold tracking-tight text-gray-900  text-3xl sm:text-5xl">
              Contact Us
            </h2>
            <div className="h-1 w-40 bg-p1 mx-auto mb-10"></div>
          </div>
        </div>

        <div class="grid md:grid-cols-2 mt-20 md:px-20 justify-center items-center">
          <div class=" pr-6">
            <ul class="mb-6 md:mb-0">
              <li class="flex">
                <div class="flex h-10 w-10 items-center justify-center rounded bg-p1 text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-6 w-6"
                  >
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                  </svg>
                </div>
                <div class="ml-4 mb-4">
                  <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 ">
                    Our Address
                  </h3>
                  <p class="text-gray-600 ">
                    Doon Hatcheries Limited B-48A GF, Main Road, Kalka Ji 
                  </p>
                  <p class="text-gray-600 ">
                  New Delhi – 110019
                  </p>
                </div>
              </li>
              <li class="flex">
                <div class="flex h-10 w-10 items-center justify-center rounded bg-p1 text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-6 w-6"
                  >
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                  </svg>
                </div>
                <div class="ml-4 mb-4">
                  <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 ">
                    Contact
                  </h3>
                  <p class="text-gray-600 ">
                    Mobile: +91 9582000035
                  </p>
                  <p class="text-gray-600 ">
                    Mail: support@redefinegroup.com
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div class="card " id="form">
            <h2 class="mb-4 text-2xl font-bold ">
              Ready to Get Started?
            </h2>
            <form id="contactForm">
              <div class="mb-6">
                <div class="mx-0 mb-1 sm:mb-4">
                  <div class="mx-0 mb-1 sm:mb-4">
                    <label
                      for="name"
                      class="pb-1 text-xs uppercase tracking-wider"
                    ></label>
                    <input
                      type="text"
                      id="name"
                      autocomplete="given-name"
                      placeholder="Your name"
                      class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0"
                      name="name"
                    />
                  </div>
                  <div class="mx-0 mb-1 sm:mb-4">
                    <label
                      for="email"
                      class="pb-1 text-xs uppercase tracking-wider"
                    ></label>
                    <input
                      type="email"
                      id="email"
                      autocomplete="email"
                      placeholder="Your email address"
                      class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0"
                      name="email"
                    />
                  </div>

                  <div class="mx-0 mb-1 sm:mb-4">
                    <label
                      for="text"
                      class="pb-1 text-xs uppercase tracking-wider"
                    ></label>
                    <input
                      type="email"
                      id="email"
                      autocomplete="email"
                      placeholder="Your Phone"
                      class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0"
                      name="phone"
                    />
                  </div>
                </div>
                <div class="mx-0 mb-1 sm:mb-4">
                  <label
                    for="textarea"
                    class="pb-1 text-xs uppercase tracking-wider"
                  ></label>
                  <textarea
                    id="textarea"
                    name="textarea"
                    cols="30"
                    rows="4"
                    placeholder="Write your message..."
                    class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0"
                  ></textarea>
                </div>
              </div>
              <div class="text-center">
                <button
                  type="submit"
                  class="w-full bg-p1 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <iframe class="img" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11633.956685434985!2d77.9968439676084!3d29.898977706444757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDUzJzM0LjUiTiA3OMKwMDAnNDAuOCJF!5e0!3m2!1sen!2sin!4v1457603749267" width="100%" height="450" frameborder="0" allowfullscreen=""></iframe>
    </>
  );
};

export default ContactUs;
