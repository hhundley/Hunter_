import React, { useState } from 'react';
import Carousel from 'react-bootstrap/esm/Carousel';
import '../styles/work.css';
import bike from '../images/bike unsplash.jpg';
import concert from '../images/austin-neill-kKlVSrFbjYY-unsplash.jpg';
import weather from '../images/ken-cheung-KonWFWUaAuk-unsplash.jpg';
import videogame from '../images/Videogame Unsplash.jpg';

function Work() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-50"
            id="slide-img"
            src={bike}
            alt="First slide"
          />
          <Carousel.Caption id="slide-text">
          <p id="slide-font-size"><span className="bigger-slide-text">Under Construction</span></p>
            <p id="slide-font-size">a placeholder for a custom designed bike shop.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
            id="slide-img"
            src={weather}
            alt="Second slide"
          />
        
  
          <Carousel.Caption id="slide-text">
          <p id="slide-font-size"><span className="bigger-slide-text"><a id="work-link" href="https://hhundley.github.io/simple-weather-app/" target="_blank" rel="noopener noreferrer">Weather</a></span></p>
            <p id="slide-font-size">a simple, sleek weather app.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
            id="slide-img"
            src={concert}
            alt="Third slide"
          />
  
          <Carousel.Caption id="slide-text">
          <p id="slide-font-size"><span className="bigger-slide-text"><a id="work-link" href="https://hhundley.github.io/simple-weather-app/" target="_blank" rel="noopener noreferrer">Ticket Scholar</a></span></p>
            <p id="slide-font-size">a concert finder.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
            id="slide-img"
            src={videogame}
            alt="Third slide"
          />
  
          <Carousel.Caption id="slide-text">
            <p id="slide-font-size"><span className="bigger-slide-text">Under Construction</span></p>
            <p id="slide-font-size">a placeholder for an indepedently developed videogame.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default Work;