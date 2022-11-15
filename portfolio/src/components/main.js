import React from 'react';
import '../styles/main.css';
import logo from '../My project-1 (1).png';
import rocket from '../rocket-1.png';

function Main() {
    return (
        <header className="App-main">
            <img src={logo} className="Logo" alt="logo" />
            <img src={rocket} className="rocket" alt="rocket" />
        </header>
    );
}

export default Main;