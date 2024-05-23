import React, { useEffect, useState } from 'react';
import './StatisticsSection.css';
import { FaUserMd, FaMapMarkerAlt, FaUserFriends, FaCertificate } from 'react-icons/fa';

const StatisticsSection = () => {
  const [dentists, setDentists] = useState(0);
  const [branches, setBranches] = useState(0);
  const [patients, setPatients] = useState(0);
  const [certificates, setCertificates] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const countToValue = (targetValue, setState) => {
      let currentCount = 0;
      const increment = targetValue / 100;
      const interval = setInterval(() => {
        currentCount += increment;
        setState(Math.ceil(currentCount));
        if (currentCount >= targetValue) {
          clearInterval(interval);
        }
      }, 10);
    };

    if (isVisible) {
      countToValue(25, setDentists);
      countToValue(1, setBranches);
      countToValue(2343, setPatients);
      countToValue(10, setCertificates);
    }
  }, [isVisible]);

  const handleIntersection = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });
    const target = document.querySelector('.statistics-section');
    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, []);

  return (
    <section className="statistics-section">
      <div className="statistics-container">
        <div className="statistics">
          <div className="statistic">
            <FaUserMd className="statistic-icon" />
            <h3>Dentists</h3>
            <p>{dentists}</p>
          </div>
          <div className="statistic">
            <FaMapMarkerAlt className="statistic-icon" />
            <h3>Branches</h3>
            <p>{branches}</p>
          </div>
          <div className="statistic">
            <FaUserFriends className="statistic-icon" />
            <h3>Patients</h3>
            <p>{patients}</p>
          </div>
          <div className="statistic">
            <FaCertificate className="statistic-icon" />
            <h3>Quality Certificates</h3>
            <p>{certificates}</p>
          </div>
        </div>
      </div>
      <div className="founder-section">
          <div className="founder-photo"></div>
          <div className="founder-quote">
            <h2>Message from the Founder</h2>
            <p>"At Nisha's Dental Care, we are committed to providing the highest quality dental care to our patients. Our team of experienced dentists and staff strive to create a comfortable and welcoming environment for all."</p>
          </div>
        </div>
    </section>
  );
};

export default StatisticsSection;
