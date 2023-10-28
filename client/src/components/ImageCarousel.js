import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import First from "./First"
import Second from './Second';
class ImageCarousel extends Component {
    
    render() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <First></First>
        <Carousel.Caption>
          <h3>Without AI Prompt Engineering</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Second></Second>
        <Carousel.Caption>
          <h3>With AI Prompt Engineering</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
    }
}

export default ImageCarousel;