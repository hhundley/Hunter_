import React from 'react';
import '../styles/main.css';
import logo from '../images/HHH thin.png';
import rocket from '../images/rocket-1.png';

function Main() {
    return (
        <header className="App-main">
            {/* eslint-disable-next-line */}
            <a name="top"></a>
            <img src={logo} className="Logo" alt="logo" />
            <img src={rocket} className="rocket animate__animated animate__fadeInBottomLeft" alt="rocket" />
        </header>
    );
}

export default Main;