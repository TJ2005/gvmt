import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './HeroSection.css';

const Slider = () => (
  <div className="carousel-fullwidth main-content">
    <Carousel interval={5000} controls indicators>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/carousel/carousel1.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/carousel/carousel2.png"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    <div className="carousel-overlay">
          <div className="carousel-title">
            ग्रामपंचायत पळसखेड नागो / नाईक
          </div>
          <div className="carousel-subtitle">
            आपले सहर्ष स्वागत करत आहे. नेहमी आपल्या सेवेत हजर.
          </div>
        </div>
  </div>
);

export default Slider;
