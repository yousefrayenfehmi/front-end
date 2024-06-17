// Navbar.js

import React, { useState } from 'react';
import './Navbar.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">MathildaLearning</a>
        <button className="navbar-toggle-btn" onClick={toggleMenu}>
          Menu
        </button>
        <ul className={`nav-menu ${showMenu ? 'active' : ''}`}>
          <li className="nav-item"><a href="/formation" className="nav-link">Formation IA</a></li>
          <li className="nav-item"><a href="/audit" className="nav-link">Audit & Conseil</a></li>
          <li className="nav-item"><a href="/conference" className="nav-link">Conférence</a></li>
          <li className="nav-item">
            <Link to="/appointment" className="nav-link" target="_blank">
              Prendre rendez-vous <CalendarMonthIcon />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
