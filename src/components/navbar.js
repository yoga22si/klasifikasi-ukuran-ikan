import React from 'react';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';
import logofish from '../assets/logofish.png';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    if (sectionId === 'top') {
      scroller.scrollTo('landing-page', {
        duration: 1000,
        delay: 100,
        smooth: 'easeInOutQuart',
      });
    } else {
      scroller.scrollTo(sectionId, {
        duration: 1000,
        delay: 100,
        smooth: 'easeInOutQuart',
      });
    }
  };

  return (
    <nav className="bg-{#} p-2  fixed w-full top-0 z-50 flex justify-between items-center">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" onClick={() => scrollToSection('top')} style={{ cursor: 'pointer' }}>
            <img src={logofish} alt="Logo" className="h-10 w-auto mr-2" />
          </Link>
          <span className="text-xl font-bold text-blue-600">Data Fish</span>
        </div>
        <ul className="flex space-x-6 items-center font-bold">
          <li><Link to="/landing-page" onClick={() => scrollToSection('top')} className="text-gray-800 hover:text-blue-500 text-sm">Beranda</Link></li>
          <li><Link to="/about" onClick={() => scrollToSection('about')} className="text-gray-800 hover:text-blue-500 text-sm">Tentang Kami</Link></li>
          <li><Link to="/biodata" onClick={() => scrollToSection('biodata')} className="text-gray-800 hover:text-blue-500 text-sm">Biodata</Link></li>
          <li><Link to="/fish-data" onClick={() => scrollToSection('fish-data')} className="text-gray-800 hover:text-blue-500 flex items-center text-sm">
            Data
          </Link></li>
          <li>
            <Link to="/upload-section" onClick={() => scrollToSection('upload-section')} className="gradient-bg text-white px-3 py-1 rounded-full shadow transition duration-300 text-sm animated-button">
              Proses Data
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
