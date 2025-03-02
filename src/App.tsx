import React from 'react';
import Navbar from './components/NavBar';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
