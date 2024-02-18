import React from "react";
import "./Contact.css";
import { Col, Row } from "react-bootstrap";
import location1 from '../../assets/location (1) 1.png'
import Group63 from '../../assets/Group 63.png'
import Reveal from "../Reveal/Reveal";

const Contact = () => {
  return (
    <div className="contactpage">
     
      <Row className="contactpagebox">
        <Col md={6} className="boxsize">
          <div className="leftcontactbox">
            <Reveal>
            <span>
              Let’s Get In Touch <span className="goldenClr"> With Us </span>
            </span>
            </Reveal>

            <div className="contactlist">
                <ul className="contactdetaillist">
              <Reveal>
                    <li> <i className="bi bi-telephone-fill contactiocn"></i> <span className="hovercontact">+971-05 44 33 88 66</span></li>
                    </Reveal>

                    <Reveal>
                    <li>  <i className="bi bi-envelope-fill contactiocn"></i><span className="hovercontact">info@unifiedinvestments.ae</span> </li>
                    </Reveal>

                    <Reveal>
                    <li style={{display:"flex"}}>
                    <i class="bi bi-geo-fill contactiocn"></i>
                    <span className="hovercontact">Unified Investments, 2nd floor, Al Amal St - Business Bay-Dubai, United Arab Emirates</span></li>
                    </Reveal>
                </ul>
            </div>
          </div>
        </Col>


        <Col md={6} className="boxsize">
            <img src={Group63} alt="Group63" className="Group63" />
        </Col>
        
      </Row>
    </div>
  );
};

export default Contact;
