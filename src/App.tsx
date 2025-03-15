import React from 'react';
import Navbar from './components/NavBar';
import Banner from './components/Banner';
import About from './components/About';
// import TechCarousel from './components/TechCarousel';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Banner />
      {/* <TechCarousel /> */}
      <About />
    </>
  );
}

export default App;
