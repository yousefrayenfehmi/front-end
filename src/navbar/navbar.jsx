import React from 'react';
import './Navbar.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">MathildaLearning</a>
        <ul className="nav-menu">
          <li className="nav-item"><a href="/formation" className="nav-link">Foramtion IA</a></li>
          <li className="nav-item"><a href="/audit" className="nav-link">Audit & Conseil</a></li>
          <li className="nav-item"><a href="/cof" className="nav-link">Confèrence</a></li>
          <li className="nav-item"><Link to="/cale" target="_blank" className="nav-link">Prendre rendez-vous{<CalendarMonthIcon></CalendarMonthIcon>}</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
