import React from 'react';
import { Link } from 'react-router-dom';
import './Styles.css';
import myimage from './myimage.jpeg';

const Header = ({ scrollToAbout }) => {
  return (
    <header className="header">
      <div className="header-content">
        
          <div className="introduction">
            <h1>Hi There I'm Nonkazimulo</h1>
            <h3>I am a Software Developer...</h3>
            <p>I am an enthusiastic, self-motivated, reliable, responsible and hardworking working person. 
      I have a great interest in Information Technology field...</p>
               
               
               <button>
          <Link to="/about">MORE ABOUT ME</Link>
        </button>
          </div>
          <div className="profile-picture">
          <img src={myimage} alt="Your Profile" />
           
          </div>
          
        </div>
      
    </header>
  );
};

export default Header;
