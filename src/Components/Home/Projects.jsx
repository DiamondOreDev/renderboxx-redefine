import React from "react";
import { Link } from "react-router-dom";
import haridwar from '../../assets/haridwar2.png'


// Sample project data
const projects = [
  {
    title: "Haridwar Paradise",
    image: haridwar,
    link: "/haridwarparadise",
  },
  {
    title: "Devprayag Paradise",
    image: "https://tff-wr.imgix.net//img/project-thumbnails/rawn-kingopenschool-03-thumbnail.jpg?w=2100&q=70&auto=format,compress",
    link: "/devprayagparadise",
  },
  {
    title: "Luxury Villa",
    image: "https://tff-wr.imgix.net//img/project-thumbnails/rawn-kingopenschool-03-thumbnail.jpg?w=2100&q=70&auto=format,compress",
    link: "#",
  },
];

const Projects = () => {
  return (
    <div className="mx-auto py-12 px-4 sm:px-6 lg:px-8 mb-4 " id="projects">
      <h2 className="text-5xl font-bold text-center mb-12 headings">Our Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="relative overflow-hidden group">
            {/* Image Container with Overlay */}
            <div className="relative">
              {/* Project Image with hover effect */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay with hover effect */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Link
                  to={project.link}
                  target="_blank"
                  className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300"
                >
                  Visit Project
                </Link>
              </div>
            </div>
            {/* Project Title */}
            <div className="py-4">
              <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 ">
                <div className="flex items-center">
                  {/* Animated Line */}
                  <div className="w-1 rounded-md h-0 bg-primary group-hover:mr-4 transition-all duration-500 group-hover:h-10"></div>
                 <p className="headings text-2xl">{project.title}</p> 
                </div>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
