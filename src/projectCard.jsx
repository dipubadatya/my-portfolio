import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

const ProjectCard = ({ title, tech, image, description, githubLink, liveLink }) => {
  return (
<div className='  transform transition-transform duration-300 hover:scale-105  w-full sm:w-1/2 md:w-1/3 lg:w-1/4 min-w-[260px] max-w-[360px] h-[480px] bg-white rounded-xl'>
{/* Image */}
        <div className='h-[45%] flex items-center justify-center'>
            <img src={image} alt={title} className='h-[85%] w-[90%] content-center object-cover rounded-2xl'/>
        </div>
        
        {/* Title & Tech */}
        <div className='h-[20%] px-5'>
            <h1 className='text-[24px] font-semibold'>{title}</h1>
            <h6 className='text-[16px] text-gray-900 font-normal'>{tech}</h6>
        </div>
        
        {/* Description */}
        <div className='h-[25%] py-3 px-5'>
            <p className='text-[14px] text-balance'>{description}</p>
        </div>

        {/* Links */}
        <div className='text-3xl h-[10%] flex items-center gap-3.5 px-5'>
           <a href={githubLink} target="_blank" rel="noopener noreferrer" className='text-2xl  text-gray-600 transform transition-transform duration-300 hover:scale-110'><FaGithub /></a>
        <a href={liveLink} target="_blank" rel="noopener noreferrer" className='text-2xl ` text-emerald-700 transform transition-transform duration-300 hover:scale-120 '><FaLaptopCode />
        </a>

        </div>
    </div>
    
  );
};

export default ProjectCard;
