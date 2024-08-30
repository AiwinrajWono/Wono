import React, { useState } from 'react';
import '../styles/steppersStyle.css';

const images = [
  'https://via.placeholder.com/800x400?text=Slide+1',
  'https://via.placeholder.com/800x400?text=Slide+2',
  'https://via.placeholder.com/800x400?text=Slide+3',
];

const TestingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="grid-container">
      <div className="carousel">
        <button className="carousel-button prev" onClick={prevSlide}>
          &lt;
        </button>
        <div className="carousel-slides">
          <img
            src={images[currentIndex]}
            alt="carousel slide"
            className="carousel-image"
          />
        </div>
        <button className="carousel-button next" onClick={nextSlide}>
          &gt;
        </button>
      </div>
      <div className="test-grid-1">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, expedita? Placeat labore accusamus numquam earum, sunt ducimus voluptate. Explicabo quod tempora ullam perspiciatis, qui quidem! Qui accusantium consequatur possimus commodi.</h1>
      </div>
      <div className="test-grid-2">
        <div className="test-form">
          <h2>World</h2>
        </div>
      </div>
    </div>
  );
};

export default TestingPage;
