import React from 'react';
import '../styles/work.css';

function Work() {
    return (
      <div className="container mt-5 animate__animated animate__fadeInUp">
        <h2 className="work-text mb-3">Work</h2>
          <div>
            <p id="work-p"><span className="bigger-text"><a id="work-link" href="https://whispering-cove-28179.herokuapp.com/" target="_blank" rel="noopener noreferrer">Ticket Scholar</a></span></p>
            <p id="project-description">a concert finder.</p>

            <p id="work-p"><span className="bigger-text"><a id="work-link" href="https://hhundley.github.io/simple-weather-app/" target="_blank" rel="noopener noreferrer">Weather</a></span></p>
            <p id="project-description">a simple, sleek weather app.</p>

            <p id="work-p"><span className="bigger-text"><a id="work-link" href="https://secret-scrubland-70160.herokuapp.com/" target="_blank" rel="noopener noreferrer">The Text Tool</a></span></p>
            <p id="project-description">a simple text editor in the form of a PWA.</p>

            <p id="work-p"><span className="bigger-text"><a id="work-link" href="https://github.com/hhundley/social-network-api.git" target="_blank" rel="noopener noreferrer">Social Network API</a></span></p>
            <p id="project-description">an api and non-relational database built for a social network.</p>

            <p id="work-p"><span className="bigger-text"><a id="work-link" href="https://github.com/hhundley/Ecommerce-Practice.git" target="_blank" rel="noopener noreferrer">Ecommerce Backend</a></span></p>
            <p id="project-description">a backend and relational database for an ecommerce platform.</p>

            <p id="work-p"><span className="bigger-text" id="work-link">Under Construction</span></p>
            <p id="project-description">a placeholder for a custom designed bike shop.</p>
            
            <p id="work-p"><span className="bigger-text" id="work-link">Under Construction</span></p>
            <p id="project-description">a placeholder for an indepedently developed videogame.</p>
        </div>
           
      </div>
    );
}

export default Work;