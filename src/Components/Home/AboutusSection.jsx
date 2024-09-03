import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Home/Footer'
import aboutusimage from '../../assets/aboutusimage.png'

const AboutusSection = () => {
  return (
    <>
    
    <div className="w-full">
        <div className="md:py-20 py-10  flex flex-col justify-between mx-auto items-center">
          <h1 className="text-5xl font-semibold text-center headings">About Us</h1>
         
          {/* Responsive Flex Container for Stats */}
          <div className="grid md:grid-cols-9 grid-cols-2 gap-4  justify-center items-start md:mt-10  mt-4">
            <div className='col-span-5 flex flex-col md:px-10 px-8  text-justify justify-center items-center mt-10'>
                <p className='text-lg md:text-2xl'>
                Redefine Group, founded in 2006 by Chander Mohan, is a leading real estate organization based in Delhi and Uttarakhand. Specializing in innovative ideas and transforming spaces, the company has developed over 2 lakh sq ft of plots and real estate across Delhi, NCR, Uttarakhand, Bhopal, Rajasthan, Vrindavan, and Goa. With six completed projects, they are currently developing a 70-acre township, "Haridwar Paradise," in Haridwar and have upcoming projects in Rishikesh and Devprayag, continuing to expand their presence and expertise.</p>
                <Link to={'/aboutus'} className='bg-primary mt-10 flex items-center justify-center px-10 py-4 text-xl rounded-md'>Know More</Link>
            </div>
    
          <div className='col-span-4'>
            <img className="w-full  " src={aboutusimage} alt="" />
          </div>
         
          </div>
        </div>
      </div> 

      <div className="w-60 h-1 bg-primary mx-auto"></div>

     
    </>
  )
}

export default AboutusSection
