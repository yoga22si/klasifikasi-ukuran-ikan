import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import './index.css';
import Navbar from './components/navbar';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import Biodata from './components/Biodata';
import FishData from './components/FishData';
import FileInput from './components/FileInput';
import BiodataDosen from './components/BiodataDosen';
import LargeComponent from './components/LargeComponent';

// import Prediction from './components/FileInput';


function App() {
  return (
    <Router>
      <div className="bg-[#FFF8F0] min-h-screen">
        <Navbar />
        <LandingPage/>
        <AboutPage />
        <Biodata/>
        <BiodataDosen/>
        <FishData/>
        <FileInput/>
        
        {/* <Prediction/> */}
      </div>
    </Router>
  );
}

export default App;
