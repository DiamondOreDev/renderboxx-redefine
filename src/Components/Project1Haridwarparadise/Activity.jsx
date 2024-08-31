import React from 'react'
import act1 from '../../assets/act1.jpg'
import act2 from '../../assets/act2.jpg'
import act3 from '../../assets/act3.jpg'
import act4 from '../../assets/act4.jpg'
import act5 from '../../assets/act5.jpg'


const Activity = () => {

    const features = [
        {
          image: act1,
          description: "Crystal World Water Park",
        },
        {
          image: act2,
          description: "Rajaji National Park",
        },
        {
          image: act3,
          description: "Rafting",
        },
  
      
        {
          image: act4,
          description: "Camping",
        },
        {
          image: act5,
          description: "Bunjee Jumping",
        },
    
      
      ];

  return (
   <>
   
   <section className="py-10 ">
      <div className=" px-0">
        <h1 className="text-center headingp1 text-5xl mb-2">Activity</h1>
        <div className="h-1 w-40 bg-p1 mx-auto mb-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="relative group overflow-hidden h-48">
              <img
                src={feature.image}
                alt={`Feature ${index + 1}`}
                className="w-full h-full object-cover grayscale transition-transform duration-500 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black bg-opacity-60 text-white p-4 transition-transform duration-500 ease-in-out transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 flex items-end">
                <p className="text-lg">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
   </>
  )
}

export default Activity
