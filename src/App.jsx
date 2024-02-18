
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/header/Header.jsx'
import Section2 from './Component/Section2/Section2.jsx';
import Blog from './Component/Section3/Blog';
import Section4 from './Component/Section4/Section4';
import Testiomanials from './Component/Testiomanials/Testiomanials';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Navbar from './Component/Navbar/Navbar';
import AnimatedCursor from "react-animated-cursor"
// import { Reveal } from './Component/Reveal/Reveal';
import { motion, useScroll } from "framer-motion"
import { useEffect } from 'react';


function App() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Disable default cursor for the entire page
    document.body.style.cursor = 'default';
    return () => {
      // Re-enable default cursor when component unmounts
      document.body.style.cursor = 'auto';
    };
  }, []); // Ensure useEffect runs only once on component mount

  return (
    <>
      <div>
      <motion.div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '4px', // Adjust height as needed
            backgroundColor: 'gold', // Initial color
            scaleX: scrollYProgress, // Scale the width based on scroll progress
            originX: 0, // Set origin to left
            zIndex: 9999 // Ensure it's above other content
          }} /> 
      <AnimatedCursor 
       innerSize={12}
       outerSize={12}
       color='50,50,50'
       outerAlpha={0.7}
       innerScale={0.7}
       outerScale={5}
       zIndex={10000}
       
      />
      
        <Navbar/>
        
      <Header/>
    
      <Section2/>
      <Blog/>
      <Section4/>
      <Testiomanials/>
      <Contact/>
      <Footer/>
      </div>
    </>
  )
}

export default App
