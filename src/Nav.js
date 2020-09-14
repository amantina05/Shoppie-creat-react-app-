import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="nav_link">
        Home
      </Link>
      <Link to="/profile" className="nav_link">
        Profile
      </Link>
      <Link to="/login" className="nav_link">
        Login
      </Link>
    </nav>
  );
}

export default Nav;
