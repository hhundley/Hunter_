import React from 'react';
import Navigation from "./components/navbar";
import Main from "./components/main";
import About from "./components/about";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navigation />
      <Main />
      <About />
      <Footer />
    </div>
  );
}

export default App;
