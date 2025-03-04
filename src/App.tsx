import React from 'react';
import Navbar from './components/NavBar';
import Banner from './components/Banner';
// import TechCarousel from './components/TechCarousel';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Banner />
      {/* <TechCarousel /> */}
    </>
  );
}

export default App;
