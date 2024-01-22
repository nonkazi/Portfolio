import React from 'react';
import { Link } from 'react-router-dom';
import './Styles.css';
import myimage from './myimage.jpeg';
import Icons from './Icons';

const Header = ({ scrollToAbout }) => {
  return (
    <header className="header">
      <div className="header-content">
        
          <div className="introduction">
            <h1>Hi There I'm Nonkazimulo</h1>
            <h3>I am a Software Developer...</h3>
            <p>"If you’re short on time or have a very complex work history,
               paying for a resume-writing service like can do wonders.
               ."</p>
               
               
               <button>
          <Link to="/about">MORE ABOUT ME</Link>
        </button>
          </div>
          <div className="profile-picture">
          <img src={myimage} alt="Your Profile" />
           <Icons />
          </div>
          
        </div>
      
    </header>
  );
};

export default Header;