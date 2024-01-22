import React from "react";
import Navbar from "./Navbar"; 
import ProjectCard from "./ProjectCard";
import Icons from "./Icons";

const Projects = () => {
  return (
    <div className="about-container">
      <div className="content-container-about">
        <Navbar />
        <div className="content">
          <div className="title">
          <h2>MY PROJECTS</h2>
          </div>
          
          <div className="project-cards-container">
            <ProjectCard
              title="Dronoticz"
              description="Description of Project 1."
              link="https://nonkazi.github.io/dronoticz/"
            />
            <ProjectCard
              title="Finquiz"
              description="Description of Project."
              link="https://finquiz-yo4h.vercel.app/"
            />
            <ProjectCard
              title="The Quiz"
              description="Description of Project."
              link="https://quizassignment5.vercel.app/"
            />
            
          </div>
        
          </div>
          <Icons />
      </div>
      
</div>
    
  );
};

export default Projects;
