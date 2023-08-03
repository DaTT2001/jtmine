import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import CSS for the carousel
interface SlideShowProps {
    images : string[]
}
const Slideshow = ({ images }: SlideShowProps) => {
  return (
    <Carousel
      
      infiniteLoop
      autoPlay
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      interval={3000}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default Slideshow;