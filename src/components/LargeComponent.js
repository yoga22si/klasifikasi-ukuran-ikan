import React from 'react';
import bg12 from '../assets/bg12.png'; // Ensure this is the correct path to your image

const LargeComponent = () => {
  return (
    <div className="w-full p-8 mt-10" style={{ backgroundImage: `url(${bg12})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100px' }}>
      
    </div>
  );
};

export default LargeComponent;
