import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Icons = () => {
  return (
    <div className="icons-container">
      <NavLink exact to="/" activeClassName="active-icon">
        <FontAwesomeIcon icon={faHome} />
      </NavLink>
      <div className="icon-divider"></div>
      <NavLink to="/about" activeClassName="active-icon">
        <FontAwesomeIcon icon={faUser} />
      </NavLink>
      <div className="icon-divider"></div>
      <NavLink to="/projects" activeClassName="active-icon">
        <FontAwesomeIcon icon={faCode} />
      </NavLink>
      <div className="icon-divider"></div>
      <NavLink to="/contact" activeClassName="active-icon">
        <FontAwesomeIcon icon={faEnvelope} />
      </NavLink>
    </div>
  );
};

export default Icons;
