import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/navbar.css';

const Navbar = () => (
  <nav className="navContainer">
    <h1 className="nav-title">Math Magician</h1>
    <ul className="navUl">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/calculator">Calculator</Link></li>
      <li><Link to="/quotes">Quotes</Link></li>
    </ul>
  </nav>
);

export default Navbar;
