import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Brandlogo from '../../assets/Unified Investment logo.png';
import slideImage from '../../assets/Rectangle 156.png'
import './Header.css'
import Slider1 from '../Slider/Slider1';
import Reveal  from '../Reveal/Reveal';

const Header = () => {
  return (
    <div className='section1'>
        {/* <Row className='headerbox'>
            <Col md={4}>
        <div className='logosvg'>
            <img src={Brandlogo} alt="logoimg" style={{width:"301px",height:"86px"}}/>
        </div>
        </Col>
        <Col md={8} style={{margin: "auto 0"}}>
        <div >
            <ul className='nav_bar'>
                <li style={{borderTop: "2px solid #FEB564",
    width: "24px"}}>Company</li>
                <li>Investors</li>
                <li>Products</li>
                <li>Journal</li>
                <li>Reach Us</li>
            </ul>
        </div>
        </Col>
        
        </Row> */}

        <Row className='heroSection'>

            <Col sm={4} className='textbox'>
                <Row>
<Reveal x={0} y={0} initialX={-100} initialY={0}>
                <span className='text1'>Empower Your Business <span  className=" goldenClr" style={{color:"#FFE998"}}>
                    Finances
                    </span>
                    </span>
            </Reveal>
                    </Row>
                    <Reveal x={0} y={0} initialX={-170} initialY={0}>
                    <Row>
                    <span className='text2'>Your Expert Partner in Swift Business Financing, Bridging Gaps, and Ensuring Success. Thrive with Us!</span>
                    </Row>
                    </Reveal>
            </Col>
            <Col sm={6}>

               <Reveal x={0} y={0} initialX={170} initialY={0}>
                <Slider1/>
                </Reveal>
            </Col>
            <Col sm={2} className='socialmedia'>
                <div>
                <ul className='socialmediabox'>
                    <li>FaceBook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>

                </ul>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default Header