import React from "react";
import { Link } from "react-router-dom";
import myimage from './myimage.jpeg';


const Navbar = () => {
  
    return (
        <nav className="navbar">
            <div className="profile">
                <img src ={myimage} alt="My profile"/>

            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>
          <Link to="/about">About Me</Link>
        </li>

                <li><Link to="/projects">My Projects</Link></li>
               
                <li><Link to="/contact">Contact Me</Link></li>
            
            </ul>
        </nav>

    );
};

export default Navbar;