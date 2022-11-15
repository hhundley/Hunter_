import React from 'react';
import '../styles/main.css';
import logo from '../HHH thin.png';
import rocket from '../rocket-1.png';

function Main() {
    return (
        <header className="App-main">
            <a name="top"></a>
            <img src={logo} className="Logo" alt="logo" />
            <img src={rocket} className="rocket" alt="rocket" />
        </header>
    );
}

export default Main;