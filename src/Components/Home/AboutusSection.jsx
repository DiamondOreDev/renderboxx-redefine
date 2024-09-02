import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Home/Footer'

const AboutusSection = () => {
  return (
    <>
    
    <div className="w-full">
        <div className="md:py-20 py-10  flex flex-col justify-between mx-auto items-center">
          <h1 className="text-5xl font-semibold text-center headings">About Us</h1>
         
          {/* Responsive Flex Container for Stats */}
          <div className="grid md:grid-cols-9 grid-cols-2 gap-4  justify-center items-start md:mt-10  mt-4">
            <div className='col-span-5 flex flex-col md:px-10 px-8  text-justify justify-center items-center mt-10'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, mollitia. Deserunt quis dolores perferendis placeat quod doloribus necessitatibus accusamus veritatis? Ipsam nisi a ipsum molestiae. Cum eveniet veritatis harum dicta ea deserunt vitae dolorem id nam similique eius rem ab dolorum, odio qui amet dolor tempora nulla! Beatae incidunt aspernatur similique, nemo cupiditate sed a culpa animi magnam officiis quod.</p>
                <Link to={'/aboutus'} className='bg-primary mt-10 flex items-center justify-center px-10 py-4 rounded-md'>Know More</Link>
            </div>
    
          <div className='col-span-4'>
            <img className="w-full h-96 " src="https://lamoureuxarchitect.ca/wp-content/uploads/2022/04/arch_drawings_black-1024x1024.png" alt="" />
          </div>
         
          </div>
        </div>
      </div> 

      <div className="w-60 h-1 bg-primary mx-auto"></div>

     
    </>
  )
}

export default AboutusSection
