// CustomCursor.js
import React, { useState, useEffect } from 'react';
import AnimatedCursor from "react-animated-cursor"
import './CustomCursor.css'


const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="custom-cursor" style={{ left: position.x, top: position.y }}>
      {/* Your custom cursor component */}
      <AnimatedCursor 
        innerSize={12} // Increase inner cursor size for better visibility
        outerSize={12} // Increase outer cursor size for better visibility
        color='50, 50, 50' // Light black color in RGB format
        outerAlpha={0.7}
        innerScale={0.7}
        outerScale={5}
      />
    </div>
  );
};

export default CustomCursor;
