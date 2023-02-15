import React from 'react';
import '../styles/about.css';
import hunter from '../images/hunter.png';


function About() {
    return (
        <section className="container mt-5">
            <p className="animate__animated animate__fadeInUp" id="business"><span className="bigger">Hey there! </span><br></br><br></br>I'm a product designer and full stack developer building a wide variety of applications. I focus on efficient, scalable, and functional design. I am motivated by a love of building and venturing into the unknown.<br></br><br></br>I'm a product of my environment. Raised in the great city of Austin, TX, you can often find me running around town lake or maybe at Hopdoddy checking out the burger of the month. If you would like to say hi or go grab a coffee sometime, don't hesitate to reach out!</p>
                <div className="animate__animated animate__fadeInUp">
                <div>
                    <img id="webpic" src={hunter} className="hunter" alt="hunter" />
                </div>
                <img id="mobilepic" src={hunter} className="hunter" alt="hunter" />
                </div>
        </section>
    );
}

export default About;