import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/navbar.css';
import icon from '../assets/calculatorIcon.png';

const Navbar = () => (
  <nav className="navContainer">
    <div className="titleCont">
      <img src={icon} alt="iconTitle" className="logo" />
      <h1 className="nav-title">
        Math Magician
      </h1>
    </div>
    <ul className="navUl">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/calculator">Calculator</Link></li>
      <li><Link to="/quotes">Quotes</Link></li>
    </ul>
  </nav>
);

export default Navbar;
