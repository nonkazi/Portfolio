import React from "react";
import Navbar from "./Navbar"; 
import Icons from "./Icons";

const About = () => {
  return (
    <div className="about-container">
      <div className="content-container-about">
        <Navbar />
        <div className="content">
          <div className="title">
          <h2>ABOUT ME</h2>
          </div>
          <h2>I'm Nonkazimulo Sthabile Mchunu,Software Developer</h2>
          <p>I am an enthusiastic, self-motivated, reliable, 
            responsible and hardworking working person. I have a great interest in Information Technology field, specifically Software Development. Throughout my studies at university, I developed skills which includes programming,
             Database Development and Administration, 
             System Design and Analysis.</p>
             <div className="section-container">
            <div className="section">
              <h3>Skills</h3>
              <p>C++,C#,HTML and CSS,JAVASCRIPT,PHP</p>
            </div>

            <div className="section">
              <h3>Experience</h3>
             <p>MAKWA-IT Technologies Software Developer Intern - 6 months</p>
            </div>

            <div className="section">
              <h3>Qualification/Certification</h3>
              <p>N Dip in IT:Software Development</p>
              <p>AZ-204,AZ-400 and Comptia A+</p>
            </div>
          </div>
        
      </div>
      <Icons />
      </div>
    </div>
  );
};

export default About;
