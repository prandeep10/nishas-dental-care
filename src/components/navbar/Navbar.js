import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">      
          <Link to="/" className='brand-name'><img src='/logo.png' alt='logo'/>Nisha's Dental Care </Link>
        </div>
        <div className={isOpen ? "navbar-links-mobile" : "navbar-links"}>
          <Link to="/" onClick={closeNavbar}>Home</Link>
          <Link to="/about" onClick={closeNavbar}>About</Link>
          <Link to="/#services" onClick={closeNavbar}>Services</Link>
          <Link to="/contact" onClick={closeNavbar}>Contact</Link>
          <Link to="/contact" onClick={closeNavbar}>Certifications</Link>
          <Link to="/blogs" onClick={closeNavbar}>Blogs</Link>
        </div>
        <div className="navbar-view-menu">
          <Link to="/menu" onClick={closeNavbar} className='button-41'>Take an Appointment</Link>
        </div>
        <div className="navbar-toggle">
          <button onClick={toggleNavbar}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;