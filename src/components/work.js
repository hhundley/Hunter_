import React from 'react';
import '../styles/work.css';

function Work() {
    return (
      <div className="container mt-5 animate__animated animate__fadeInUp">
        <h2 className="work-text mb-3">Work</h2>
          <div>
            <p id="work-p"><span className="bigger-text"><a id="work-link" href="https://secret-scrubland-70160.herokuapp.com/" target="_blank" rel="noopener noreferrer">The Text Tool</a></span></p>
            <p id="project-description">a simple text editor in the form of a PWA.</p>
            <p id="project-links"><a id="proj-link" href="https://github.com/hhundley/the-text-tool" target="_blank" rel="noopener noreferrer">Github Repo</a> | <a id="proj-link" href="https://secret-scrubland-70160.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed App</a></p>

            <p id="work-p"><span className="bigger-text"><a id="work-link" href="https://github.com/hhundley/social-network-api.git" target="_blank" rel="noopener noreferrer">Social Network API</a></span></p>
            <p id="project-description">an api and non-relational database built for a social network.</p>
            <p id="project-links"><a id="proj-link" href="https://github.com/hhundley/social-network-api.git" target="_blank" rel="noopener noreferrer">Github Repo</a></p>

            <p id="work-p"><span className="bigger-text"><a id="work-link" href="https://github.com/hhundley/Ecommerce-Practice.git" target="_blank" rel="noopener noreferrer">Ecommerce Backend</a></span></p>
            <p id="project-description">a backend and relational database for an ecommerce platform.</p>
            <p id="project-links"><a id="proj-link" href="https://github.com/hhundley/Ecommerce-Practice.git" target="_blank" rel="noopener noreferrer">Github Repo</a></p>

            <p id="work-p"><span className="bigger-text" id="work-link">Under Construction</span></p>
            <p id="project-description">a placeholder for a custom designed bike shop.</p>
            
            <p id="work-p"><span className="bigger-text" id="work-link">Under Construction</span></p>
            <p id="project-description">a placeholder for an indepedently developed videogame.</p>
            
        </div>
           
      </div>
    );
}

export default Work;