import React, { useRef, useEffect } from "react";
import "./CarouselSection.css";

const images = [
  { src: "img1.png", alt: "Image 1" },
  { src: "img1.png", alt: "Image 2" },
  // ... keep all 10 images ...
];

const CarouselSection = () => {
  const containerRef = useRef(null);
  const scrollWrapperRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollWrapper = scrollWrapperRef.current;

    // Create a true circular queue by adding the first image at the end
    const circularImages = [...images, images[0]];
    
    // Clone images for seamless infinite scroll
    scrollWrapper.innerHTML = 
      Array(3).fill().map(() => 
        circularImages.map((img, i) => `
          <img src="${img.src}" alt="${img.alt}" 
               class="carousel-img" draggable="false" />
        `).join('')
      ).join('');

    // Animation logic
    let animation;
    const duration = images.length * 8000; // Slower speed (8000ms per image)
    
    const animate = () => {
      const start = performance.now();
      
      const frame = (time) => {
        const elapsed = time - start;
        const progress = elapsed / duration;
        
        if (progress < 1) {
          scrollWrapper.style.transform = `translateX(-${progress * 100}%)`;
          animation = requestAnimationFrame(frame);
        } else {
          // Instead of resetting abruptly, we'll create a seamless transition
          // by moving the first set of images to the end
          scrollWrapper.style.transition = 'none';
          scrollWrapper.style.transform = 'translateX(0)';
          
          // Force a reflow to ensure the transition is applied
          void scrollWrapper.offsetHeight;
          
          // Remove the transition property to allow for smooth animation
          scrollWrapper.style.transition = '';
          
          // Restart the animation
          animate();
        }
      };
      
      animation = requestAnimationFrame(frame);
    };

    console.log("Animation started");

    animate();

    // Cleanup
    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <div className="carousel-section-outer main-content">
      <div className="carousel-heading">स्वच्छ, सुंदर - आपलं पळसखेड</div>
      <div className="scroll-container" ref={containerRef}>
        <div className="scroll-wrapper" ref={scrollWrapperRef} />
      </div>
    </div>
  );
};

export default CarouselSection;
