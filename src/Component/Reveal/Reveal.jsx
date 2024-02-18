import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Reveal = ({ children, x = 0, y = 0 ,initialX,initialY}) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const slideControls=useAnimation()
  const  inView  = useInView(ref,{once:true});

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: x,
        y: y,
        transition: { duration: .5, delay: .5 ,ease:"easeIn"}
      });
      slideControls.start({
        opacity:1,
        left:'100%',
        transition:{duration:.5,ease:"easeIn"}
      })
    }
  }, [controls, inView, x, y]);

  return (
    <div ref={ref} style={{position:'relative'}}>
    <motion.div
      
      initial={{ opacity: 0,x:initialX, y: initialY }} // Initial position outside the viewport
      animate={controls}
      style={{ opacity: 0 }} // Set initial opacity to 0
    >
      {children}
    </motion.div>
    <motion.div
   initial={{opacity:0,left:0}}
   animate={slideControls}
   style={{
    position:'absolute',
    top:4,
    bottom:4,
    left:0,
    right:0,
    background:'#f39c12',
    zIndex:20,
   }}
    />
    </div>
  );
};

export default Reveal;
