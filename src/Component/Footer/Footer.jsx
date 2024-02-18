import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import footerimg from "../../assets/Unified Investment logo.png";
import forbespic from "../../assets/image 8.png";
import fortunepic from "../../assets/image 4.png";
import outlookpic from "../../assets/image 5.png";
import instagram from "../../assets/socialIcon/instagram_2111463.png";
import facebook from "../../assets/socialIcon/facebook_2504903.png";
import linkedin from "../../assets/socialIcon/linkedin_2504923.png";
import "./Footer.css";
import Reveal from "../Reveal/Reveal";

const Footer = () => {
  return (
    <div className="footerpage">
      <Row className="footerpagebox">
        <Col md={4} className="footerbox">
          <div className="footerimg">
            <Reveal>
            <img src={footerimg} alt="footerimg" className="footerimg1" />
            </Reveal>

            <div className="footerlist">
              <ul className="footerlist1">
                  <Reveal>
                <li style={{ display: "flex" }}>
                  <i class="bi bi-geo-fill contactiocn"></i>
                  <span className="footerdetails">
                    Interior Design Center Inc. A USA Based Photo Editing
                    Company in Tokyo, Japan. Corporation NO. 524172-2, Check
                    Here.
                  </span>
                </li>
                  </Reveal>
                <li className="footernumber">
                    <Reveal>
                  <div>
                    <i className="bi bi-telephone-fill contactiocn"></i>
                    <span className="footernumber1">+88(019)04-000012</span>
                  </div>
</Reveal>
                  {/* </li>

<li className="footernumber"> */}
<Reveal>
                  <div>
                    <i className="bi bi-envelope-fill contactiocn"></i>
                    <span className="footernumber1">Info.01241588@gmail</span>
                  </div>
</Reveal>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col md={2} className="footerbox">
          <div className="menubox">
            <Reveal>
            <span className="menutitle">MENU</span>
            </Reveal>
            <ul className="menulist">
              <Reveal>
              <li className="menulisttitle">Company</li>
              </Reveal>
              <Reveal>
              <li className="menulisttitle">Invenstors</li>
              </Reveal>

              <Reveal>
              <li className="menulisttitle">Products</li>
              </Reveal>
<Reveal>             
   <li className="menulisttitle">Jopunral</li>
</Reveal>
<Reveal>
              <li className="menulisttitle">Reach Us</li>
              </Reveal>
            </ul>
          </div>
        </Col>
        <Col md={3} className="footerbox">
          <div className="usefull">
            <Reveal>
            <span className="usefulltitle">Useful link</span>
            </Reveal>
            <ul className="usefulllist">
              <Reveal>
              <li className="usefulllisttitle">Home</li>
              </Reveal>
              <Reveal>
              <li className="usefulllisttitle">Company</li>
              </Reveal>
              <Reveal>
              <li className="usefulllisttitle">Privacy Policy</li>
              </Reveal>
              <Reveal>
              <li className="usefulllisttitle">Terms and Conditions</li>
              </Reveal>
              <Reveal>
              <li className="usefulllisttitle">Return & Refund</li>
              </Reveal>
            </ul>
          </div>
        </Col>
        <Col md={3} className="footerbox">
          <div className="followus">
            <Reveal>
            <span className="followustitle">Follow Us</span>
            </Reveal>

            <Reveal>
            <div className="socailIconlist">
              <img
                src={instagram}
                alt="instagramVid"
                className="instagramVid"
              />
              <img src={facebook} alt="facebook" className="instagramVid" />
              <img src={linkedin} alt="linkedin" className="instagramVid" />
            </div>
            </Reveal>
          </div>
        </Col>
      </Row>

      <div className="advertismentbox">
        <Reveal>
        <span className="mediatext">Media & Publications</span>
        <img src={forbespic} alt="forbespic" className="forbespic" />
        <img src={fortunepic} alt="fortunepic" className="fortunepic" />
        <img src={outlookpic} alt="outlookpic" className="outlookpic" />
        </Reveal>
      </div>
    </div>
  );
};

export default Footer;
