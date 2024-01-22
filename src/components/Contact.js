import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./Navbar"; 
import Icons from "./Icons";

const Contact = () => {
  return (
    <div className="about-container">
      <div className="content-container-about">
        <Navbar />
        <div className="content">
          <div className="title">
          <h2>CONTACT ME</h2>
          </div>
          <p>
            Feel free to get in touch with me through any of the following
            channels. I'm always open to new opportunities and collaborations!
          </p>

          
           <div className="contact-info">
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> Email: nonkazimulomchunu@gmail.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> Call: +27 66 355 2701
            </p>
            <p>
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn: linkedin.com/in/nonkazimulo
            </p>
            <p>
              <a href="https://github.com/nonkazi" className="icon" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} /> GitHub: github.com/nonkazi
              </a>
            </p>
           
          </div>
        </div>
      <Icons />
      </div>
      

    </div>
  );
};

export default Contact;
