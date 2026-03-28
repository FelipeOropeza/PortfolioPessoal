import React from 'react';
import Navbar from './components/NavBar';
import Banner from './components/Banner';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <>
      <div className="cyber-grid" />
      <Navbar />
      <div className="relative z-10">
        <Banner />
        <About />
        <Project />
        <Contact />
      </div>
    </>
  );
}

export default App;
