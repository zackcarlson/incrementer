import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = function() {
  return (
    <nav className="navbar navbar-light fixed-top" id="nav"> 
      <Link className="navbar-brand" to="/">
        Grio
      </Link>
    </nav>
  );
};

export default NavBar;