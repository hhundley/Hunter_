import React from 'react';
import Navigation from "./components/navbar";
import Main from "./components/main";
import About from "./components/about";
import Work from "./components/work";
import Contact from "./components/contact"
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navigation />
      <Main />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
