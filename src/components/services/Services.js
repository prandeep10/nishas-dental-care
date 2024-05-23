import React from 'react';
import './Services.css';
import { FaTooth, FaSmile, FaDollarSign } from 'react-icons/fa'; // Importing icons

const Services = () => {
  return (
    <div className="services-container" id='services'>
      <h2 className="services-heading">Our Services</h2>
      <div className="services">
        <div className="service-card">
          <FaTooth className="service-icon tooth-icon" />
          <h3>General Dentistry</h3>
          <p>From routine checkups to treatments.</p>
        </div>
        <div className="service-card">
          <FaSmile className="service-icon smile-icon" />
          <h3>Cosmetic Dentistry</h3>
          <p>Enhancing smiles with modern techniques.</p>
        </div>
        <div className="service-card">
          <FaDollarSign className="service-icon dollar-icon" />
          <h3>Affordable Pricing</h3>
          <p>Quality dental care at competitive prices.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
