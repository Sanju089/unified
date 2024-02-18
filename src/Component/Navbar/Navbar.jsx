import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Brandlogo from '../../assets/Unified Investment logo.png';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
      <Row className={scrolled ? 'headerbox' : 'headerbox1'}>
        <Col md={4}>
          <div className='logosvg'>
            <img src={Brandlogo} alt="logoimg" style={{ width: "301px", height: "86px" }} />
          </div>
        </Col>
        <Col md={8} style={{ margin: "auto 0" }}>
          <div >
            <ul className='nav_bar'>
              <li style={{ borderTop: "2px solid #FEB564", width: "24px" }} >Company</li>
              <li >Investors <i class="bi bi-chevron-down"></i></li>
              <li >Products <i class="bi bi-chevron-down"></i></li>
              <li >Journal</li>
              <li >Reach Us</li>
            </ul>
          </div>
        </Col>
      </Row>
    
  );
}

export default Navbar;
