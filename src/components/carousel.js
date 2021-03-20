import React from "react";
import { Carousel, Container } from "react-bootstrap";
import Img2 from "../images/Card2.webp";
import Img4 from "../images/Card4.jpg";

export function CarouselDisplay() {
  return (
    <Container>
      <Carousel className="mt-3">
        <Carousel.Item interval={1000}>
          <img src={Img2} alt="Card2" style={{ width: "100%" }}></img>
          <Carousel.Caption style={{ color: "gold" }}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={Img2} alt="Card2" style={{ width: "100%" }}></img>
          <Carousel.Caption style={{ color: "brown" }}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={Img4} alt="Card2" style={{ width: "100%" }}></img>
          <Carousel.Caption style={{ color: "hotpink", fontSize: "50px" }}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

