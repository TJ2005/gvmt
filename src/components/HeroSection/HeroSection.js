import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useTranslation } from "react-i18next";
import './HeroSection.css';

const Slider = () => {
  const { t, i18n } = useTranslation();

  return(
    <div className="carousel-fullwidth main-content">
    <Carousel interval={5000} controls indicators>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/carousel/carousel1.jpg"
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
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/carousel/carousel3.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    <div className="carousel-overlay">
          <div className="carousel-title">
          {t('navbar.village')}
          </div>
          <div className="carousel-subtitle">
            {t('navbar.welcomeMsg')}
          </div>
        </div>
  </div>
  )
};

export default Slider;
