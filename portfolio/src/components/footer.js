import React from 'react';
import '../styles/footer.css';
import github from '../github.svg';
import instagram from '../instagram.svg';
import linkedin from '../linkedin.svg';


function Footer() {
    return(
        <footer>
        <div className="container d-flex justify-content-center py-5">
            <div className="mx-2">
            <a href="https://github.com/hhundley" target="_blank" rel="noopener noreferrer"><img src={github} id="github" alt="github" /></a>
            </div>
            <div className="mx-2">
            <a href="https://www.instagram.com/hunter_hundley/" target="_blank" rel="noopener noreferrer"><img src={instagram} className="icon" alt="instagram" /></a>
            </div>
            <div className="mx-2">
            <a href="https://www.linkedin.com/in/hunter-hundley-ab9284182/" target="_blank" rel="noopener noreferrer"><img src={linkedin} id="linkedin" alt="linkedin" /></a>
            </div>
          
        </div>

        <div className="text-center text-black p-5" id="copy">
            © 2022 Hunter Hundley
        </div>
    
        </footer>
    );
}

export default Footer;