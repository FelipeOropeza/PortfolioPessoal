import React from 'react';
import Navbar from './components/NavBar';
import Banner from './components/Banner';
import About from './components/About';
import Project from './components/Project';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Project />
    </>
  );
}

export default App;
