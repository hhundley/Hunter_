import React from 'react';
import '../styles/about.css';
import hunter from '../hunter.png';


function About() {
    return (
        <section id="about">
            <div>
            <img src={hunter} className="hunter" alt="hunter" />
            </div>
            <p>Hey there! I'm a full stack developer building a wide variety of applications. I focus on efficient, scalable, and functional design. I am motivated by a love of building and venturing into the unknown.<br></br> <br></br> 
            Raised in the great city of Austin, TX, you can often find me running around town lake or finding a concert to check out. If you would like to say hi or go grab a coffee sometime, don't hesitate to reach out!</p>
            </section>
    );
}

export default About;