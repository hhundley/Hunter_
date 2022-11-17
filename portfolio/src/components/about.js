import React from 'react';
import '../styles/about.css';
import hunter from '../hunter.png';


function About() {
    return (
        <section id="about">
             <p id="business"><span class="bigger">Hey there! </span><br></br><br></br>I'm a full stack developer building a wide variety of applications. I focus on efficient, scalable, and functional design. I am motivated by a love of building and venturing into the unknown.<br></br><br></br>I'm a product of my environment. Raised in the great city of Austin, TX, you can often find me running around town lake or maybe at Hopdoddy checking out the burger of the month. If you would like to say hi or go grab a coffee sometime, don't hesitate to reach out!</p>
            <div>
            <img id="webpic" src={hunter} className="hunter" alt="hunter" />
            </div>
            <img id="mobilepic" src={hunter} className="hunter" alt="hunter" />
            </section>
    );
}

export default About;