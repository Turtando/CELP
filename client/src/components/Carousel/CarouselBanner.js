import React from "react";
import { Carousel, Jumbotron, Row, Col } from "react-bootstrap";
import "./index.css"
import { Container } from "../Grid";
// import image1 from "./image/philadelphia1";
// import image2 from "./image/philadelphia2"
// import philadelphia2 from "./image"

function CarouselBanner() {
  return (
    <div>
      {/* <Row> */}
        {/* <Col md={{ span: 5, offset: 1 }}> */}
          <Jumbotron>
            <Carousel className="slideshow">
              <Carousel.Item>
                <img
                  className="d-block imageSize imageOpacity"
                  // <img
                  // className="background"
                  src="/image/philadelphia1.png"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h1 className="textColor slideText">Welcome to CELP: Rate-A-Cop!</h1>
                  <h4 className="textColor slideText">
                    The one-stop application for tracking Philadelphia community crime.
                  </h4>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block imageSize imageOpacity"
                  src="/image/mediaimage.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h1 className="slideText">Community Connections</h1>
                  <h4 className="slideText">
                    View and communicate with other member's posts through the site.
                  </h4>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block imageSize imageOpacity"
                  src="/image/philadelphiamap.jpeg"
                  // "https://isteam.wsimg.com/ip/f9949944-00e7-11e6-8364-14feb5d9e2d6/ols/1469_original/:/rs=w:600,h:600"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  {/* <Container className="imageText"> */}
                  <h1 className="captionColor slideText">Cases by Location</h1>
                  <h4 className="captionColor slideText">
                    Create and log location of interactions with law enforcement officers in real time!
                  </h4>
                  {/* </Container> */}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Jumbotron>
        {/* </Col> */}
      {/* </Row> */}
    </div>
  );
}

export default CarouselBanner;
