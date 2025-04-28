import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./CarouselSection.css";

const images = [
  { src: "/assets/images/infinitescrollcarousel/img1.png", alt: "Village Image 1" },
  { src: "/assets/images/infinitescrollcarousel/img2.jpeg", alt: "Village Image 2" },
  
  { src: "/assets/images/infinitescrollcarousel/img3.jpeg", alt: "Village Image 3" },
  { src: "/assets/images/infinitescrollcarousel/img4.jpeg", alt: "Village Image 4" },
  { src: "/assets/images/infinitescrollcarousel/img1.png", alt: "Village Image 1" },
  { src: "/assets/images/infinitescrollcarousel/img2.jpeg", alt: "Village Image 2" },
  
  { src: "/assets/images/infinitescrollcarousel/img3.jpeg", alt: "Village Image 3" },
  { src: "/assets/images/infinitescrollcarousel/img4.jpeg", alt: "Village Image 4" },
  { src: "/assets/images/infinitescrollcarousel/img1.png", alt: "Village Image 1" },
  { src: "/assets/images/infinitescrollcarousel/img2.jpeg", alt: "Village Image 2" },
  { src: "/assets/images/infinitescrollcarousel/img1.png", alt: "Village Image 1" },
  { src: "/assets/images/infinitescrollcarousel/img2.jpeg", alt: "Village Image 2" },
  
  { src: "/assets/images/infinitescrollcarousel/img3.jpeg", alt: "Village Image 3" },
  { src: "/assets/images/infinitescrollcarousel/img4.jpeg", alt: "Village Image 4" },
  { src: "/assets/images/infinitescrollcarousel/img1.png", alt: "Village Image 1" },
  { src: "/assets/images/infinitescrollcarousel/img2.jpeg", alt: "Village Image 2" },
  
  { src: "/assets/images/infinitescrollcarousel/img3.jpeg", alt: "Village Image 3" },
  { src: "/assets/images/infinitescrollcarousel/img4.jpeg", alt: "Village Image 4" },
  { src: "/assets/images/infinitescrollcarousel/img1.png", alt: "Village Image 1" },
  { src: "/assets/images/infinitescrollcarousel/img2.jpeg", alt: "Village Image 2" },
  { src: "/assets/images/infinitescrollcarousel/img1.png", alt: "Village Image 1" },
  { src: "/assets/images/infinitescrollcarousel/img2.jpeg", alt: "Village Image 2" },
  
  { src: "/assets/images/infinitescrollcarousel/img3.jpeg", alt: "Village Image 3" },
  { src: "/assets/images/infinitescrollcarousel/img4.jpeg", alt: "Village Image 4" },
  { src: "/assets/images/infinitescrollcarousel/img1.png", alt: "Village Image 1" },
  { src: "/assets/images/infinitescrollcarousel/img2.jpeg", alt: "Village Image 2" },
  
  { src: "/assets/images/infinitescrollcarousel/img3.jpeg", alt: "Village Image 3" },
  { src: "/assets/images/infinitescrollcarousel/img4.jpeg", alt: "Village Image 4" },
  { src: "/assets/images/infinitescrollcarousel/img1.png", alt: "Village Image 1" },
  { src: "/assets/images/infinitescrollcarousel/img2.jpeg", alt: "Village Image 2" },
  { src: "/assets/images/infinitescrollcarousel/img1.png", alt: "Village Image 1" },
  { src: "/assets/images/infinitescrollcarousel/img2.jpeg", alt: "Village Image 2" },
  
  { src: "/assets/images/infinitescrollcarousel/img3.jpeg", alt: "Village Image 3" },
  { src: "/assets/images/infinitescrollcarousel/img4.jpeg", alt: "Village Image 4" },
  { src: "/assets/images/infinitescrollcarousel/img1.png", alt: "Village Image 1" },
  { src: "/assets/images/infinitescrollcarousel/img2.jpeg", alt: "Village Image 2" },
  
  { src: "/assets/images/infinitescrollcarousel/img3.jpeg", alt: "Village Image 3" },
  { src: "/assets/images/infinitescrollcarousel/img4.jpeg", alt: "Village Image 4" },
  { src: "/assets/images/infinitescrollcarousel/img1.png", alt: "Village Image 1" },
  { src: "/assets/images/infinitescrollcarousel/img2.jpeg", alt: "Village Image 2" },
];

const CarouselSection = () => {
  const { t, i18n } = useTranslation();
  const scrollRef = useRef(null);
  

  useEffect(() => {
    const scrollElement = scrollRef.current;
    let position = 0;

    const scroll = () => {
      position -= 0.5;
      scrollElement.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
  }, []);

  return (
    <div className="carousel-section-outer main-content">
      <div className="carousel-heading">{t('navbar.norm')}</div>
      <div className="scroll-container">
        <div className="scroll-wrapper" ref={scrollRef}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="carousel-img"
              draggable={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
