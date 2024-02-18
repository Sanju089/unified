import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import comma from "../../assets/comma.png";
import Ellipse30 from "../../assets/Ellipse 30.png";
import Ellipse31 from "../../assets/Ellipse 31.png";
import Slider from "react-slick";

import "./Testiomanials.css";
import Reveal from "../Reveal/Reveal";

const Testiomanials = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, // Remove arrows
        dots: true, // Enable dots
        customPaging: function(i) { // Customize dot appearance
          return <button style={{ color: 'white' }}>{i + 1}</button>;
        }
      };
    
  return (
    <div className="testiomanials">
        <Reveal>
      <Row className="marginDefault">

        <span className="testiomanials_title">Testiomanials</span>
      </Row>
        </Reveal>

      <Slider {...settings}>
        <div>
          <Row className="testimonalsBox">
            <Col md={6}  className="leftside">
              <Row>
                <Col className="leftreviewbox">
<Reveal x={0} y={0} initialX={-100} initialY={0}>  

                  <img src={Ellipse30} alt="Ellipse30" className="Ellipse30" />
                  </Reveal>
                </Col>
                <Col>
                  <div className="reviewSection1">
                <Reveal>                  

                    <img src={comma} alt="comma" className="comma" />
</Reveal>
<Reveal>                    <div className="starIcon">
                      <i className="bi bi-star-fill starIcon1"></i>
                      <i className="bi bi-star-fill starIcon1"></i>
                      <i className="bi bi-star-fill starIcon1"></i>
                      <i className="bi bi-star-fill starIcon1"></i>
                      <i className="bi bi-star-fill starIcon1"></i>
                    </div>
                    </Reveal>

<Reveal>
                    <div className="testimonial_text">
                      Is be upon sang fond must shew. Really boy law county she
                      unable her sister. Feet you off its like like six. Among
                      sex are leave law built now.
                    </div>
                    </Reveal>

                    <Reveal>
                    <div className="testimonial_credit">
                      <span className="reviwe_name">Danial H</span>
                      <span className="reviwe_name1">CEO GetNextDesign</span>
                    </div>
                    </Reveal>
                  </div>
                

                </Col>
              </Row>
            </Col>

            <div className="middleline"></div>

            <Col md={6} className="rightside">
              <Row>
                <Col className="leftreviewbox">
<Reveal x={0} y={0} initialX={-100} initialY={0}>  

                  <img src={Ellipse31} alt="Ellipse31" className="Ellipse30" />
                </Reveal>
                </Col>
                <Col>
                  <div className="reviewSection1">
                    <Reveal>
                    <img src={comma} alt="comma" className="comma" />
                    </Reveal>
                    
                    <Reveal>
                    <div className="starIcon">
                      <i className="bi bi-star-fill starIcon1"></i>
                      <i className="bi bi-star-fill starIcon1"></i>
                      <i className="bi bi-star-fill starIcon1"></i>
                      <i className="bi bi-star-fill starIcon1"></i>
                      <i className="bi bi-star-fill starIcon1"></i>
                    </div>
                    </Reveal>

                    <Reveal>
                    <div className="testimonial_text">
                      Is be upon sang fond must shew. Really boy law county she
                      unable her sister. Feet you off its like like six. Among
                      sex are leave law built now.
                    </div>
                    </Reveal>

<Reveal>
                    <div className="testimonial_credit">
                      <span className="reviwe_name">John H</span>
                      <span className="reviwe_name1">Design</span>
                    </div>
                    </Reveal>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        <div>
          <Row className="testimonalsBox">
            <Col md={6}  className="leftside">
              <Row>
                <Col className="leftreviewbox">
<Reveal x={0} y={0} initialX={-100} initialY={0}>  

                  <img src={Ellipse30} alt="Ellipse30" className="Ellipse30" />
                  </Reveal>
                </Col>
                <Col>
                  <div className="reviewSection1">
                <Reveal>                  

                    <img src={comma} alt="comma" className="comma" />
</Reveal>
<Reveal>                    <div className="starIcon">
                      <i className="bi bi-star-fill starIcon1"></i>
                      <i className="bi bi-star-fill starIcon1"></i>
                      <i className="bi bi-star-fill starIcon1"></i>
                      <i className="bi bi-star-fill starIcon1"></i>
                      <i className="bi bi-star-fill starIcon1"></i>
                    </div>
                    </Reveal>

<Reveal>
                    <div className="testimonial_text">
                      Is be upon sang fond must shew. Really boy law county she
                      unable her sister. Feet you off its like like six. Among
                      sex are leave law built now.
                    </div>
                    </Reveal>

                    <Reveal>
                    <div className="testimonial_credit">
                      <span className="reviwe_name">Danial H</span>
                      <span className="reviwe_name1">CEO GetNextDesign</span>
                    </div>
                    </Reveal>
                  </div>
                

                </Col>
              </Row>
            </Col>

            <div className="middleline"></div>

            <Col md={6} className="rightside">
              <Row>
                <Col className="leftreviewbox">
<Reveal x={0} y={0} initialX={-100} initialY={0}>  

                  <img src={Ellipse31} alt="Ellipse31" className="Ellipse30" />
                </Reveal>
                </Col>
                <Col>
                  <div className="reviewSection1">
                    <Reveal>
                    <img src={comma} alt="comma" className="comma" />
                    </Reveal>
                    
                    <Reveal>
                    <div className="starIcon">
                      <i className="bi bi-star-fill starIcon1"></i>
                      <i className="bi bi-star-fill starIcon1"></i>
                      <i className="bi bi-star-fill starIcon1"></i>
                      <i className="bi bi-star-fill starIcon1"></i>
                      <i className="bi bi-star-fill starIcon1"></i>
                    </div>
                    </Reveal>

                    <Reveal>
                    <div className="testimonial_text">
                      Is be upon sang fond must shew. Really boy law county she
                      unable her sister. Feet you off its like like six. Among
                      sex are leave law built now.
                    </div>
                    </Reveal>

<Reveal>
                    <div className="testimonial_credit">
                      <span className="reviwe_name">John H</span>
                      <span className="reviwe_name1">Design</span>
                    </div>
                    </Reveal>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        <div>
          <Row className="testimonalsBox">
            <Col md={6}  className="leftside">
              <Row>
                <Col className="leftreviewbox">
<Reveal x={0} y={0} initialX={-100} initialY={0}>  

                  <img src={Ellipse30} alt="Ellipse30" className="Ellipse30" />
                  </Reveal>
                </Col>
                <Col>
                  <div className="reviewSection1">
                <Reveal>                  

                    <img src={comma} alt="comma" className="comma" />
</Reveal>
<Reveal>                    <div className="starIcon">
                      <i className="bi bi-star-fill starIcon1"></i>
                      <i className="bi bi-star-fill starIcon1"></i>
                      <i className="bi bi-star-fill starIcon1"></i>
                      <i className="bi bi-star-fill starIcon1"></i>
                      <i className="bi bi-star-fill starIcon1"></i>
                    </div>
                    </Reveal>

<Reveal>
                    <div className="testimonial_text">
                      Is be upon sang fond must shew. Really boy law county she
                      unable her sister. Feet you off its like like six. Among
                      sex are leave law built now.
                    </div>
                    </Reveal>

                    <Reveal>
                    <div className="testimonial_credit">
                      <span className="reviwe_name">Danial H</span>
                      <span className="reviwe_name1">CEO GetNextDesign</span>
                    </div>
                    </Reveal>
                  </div>
                

                </Col>
              </Row>
            </Col>

            <div className="middleline"></div>

            <Col md={6} className="rightside">
              <Row>
                <Col className="leftreviewbox">
<Reveal x={0} y={0} initialX={-100} initialY={0}>  

                  <img src={Ellipse31} alt="Ellipse31" className="Ellipse30" />
                </Reveal>
                </Col>
                <Col>
                  <div className="reviewSection1">
                    <Reveal>
                    <img src={comma} alt="comma" className="comma" />
                    </Reveal>
                    
                    <Reveal>
                    <div className="starIcon">
                      <i className="bi bi-star-fill starIcon1"></i>
                      <i className="bi bi-star-fill starIcon1"></i>
                      <i className="bi bi-star-fill starIcon1"></i>
                      <i className="bi bi-star-fill starIcon1"></i>
                      <i className="bi bi-star-fill starIcon1"></i>
                    </div>
                    </Reveal>

                    <Reveal>
                    <div className="testimonial_text">
                      Is be upon sang fond must shew. Really boy law county she
                      unable her sister. Feet you off its like like six. Among
                      sex are leave law built now.
                    </div>
                    </Reveal>

<Reveal>
                    <div className="testimonial_credit">
                      <span className="reviwe_name">John H</span>
                      <span className="reviwe_name1">Design</span>
                    </div>
                    </Reveal>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Slider>

      <div className="line_animation">
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
      </div>
    </div>
  );
};

export default Testiomanials;
