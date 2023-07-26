import React from 'react';
import ProjectCard from '@/UI/ProjectCard/ProjectCard';
import images from '@/constants/images';

const Projects = () => {
  const projectsData = [
    {
      name: 'Animart',
      link: 'http://animart.in/',
      image: images.p1, // Replace with the actual image URL for Project 1
    },
    {
      name: 'Shubh Vivah Matrimony',
      link: 'https://shubhvivaahmatrimony.in/',
      image: images.p2, // Replace with the actual image URL for Project 2
    },
    {
      name: 'SGL Miniplex',
      link: 'sglminiplex.com',
      image: images.p3, // Replace with the actual image URL for Project 3
    },
    {
      name: 'The Market',
      link: 'https://theeastwindz0.github.io/themarket/',
      image: images.p4, // Replace with the actual image URL for Project 4
    },
    {
      name: '3pl Warehouse Services',
      link: 'https://warehouseservicez.com/',
      image: images.p5, // Replace with the actual image URL for Project 4
    },
    {
      name: 'Zerox Club',
      link: 'zeroxclub.tech',
      image: images.p6, // Replace with the actual image URL for Project 4
    },
    {
      name: 'Tailorshope',
      link: 'tailorshope.com',
      image: images.p7, // Replace with the actual image URL for Project 4
    },
    {
      name: 'Aim Ladder',
      link: 'https://aimladder-frontend.vercel.app/',
      image: images.p8, // Replace with the actual image URL for Project 4
    },
    // Add more projects as needed
  ];

  return (
    <div className="flex justify-around items-center flex-wrap gap-10 font-monoton">
      <h1 className="text-5xl">Our Previous Work</h1>
      <div className="flex justify-evenly items-center flex-wrap gap-10">
        {projectsData.map((project, index) => (
          <div key={index}>
            <ProjectCard name={project.name} image={project.image} link={project.link}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
