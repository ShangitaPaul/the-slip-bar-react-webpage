import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SLIDER_IMAGES from '../data/sliderImages';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Home.css';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % SLIDER_IMAGES.length;
      setCurrentIndex(nextIndex);
    }, 2050);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentSlide = SLIDER_IMAGES[currentIndex];

  return (
    <div className='af-height-90 af-max-width mx-auto mt-2 position-relative'>
      <Carousel
        activeIndex={currentIndex}
        onSelect={(index) => setCurrentIndex(index)}
        controls={true}
        indicators={true}
      >
        {SLIDER_IMAGES.map((slide, index) => (
          <Carousel.Item key={index}>
            <img className='d-block w-100' src={slide.link} alt={slide.title} />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className='carousel-caption position-absolute'>
        <div className='af-position-lg af-bg-dark-transparent py-4'>
          <h3>{currentSlide.title}</h3>
          <p>{currentSlide.description}</p>
          <div className='button-container'>
            <Link to='/redondo-beach' className='btn btn-primary transparent-btn'>Redondo Beach</Link>
            {' '}
            {''}
            <Link to='/lomita' className='btn btn-primary transparent-btn'>Lomita</Link>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default Home;
