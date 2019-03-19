import React from 'react';
import './App.css';
import Canvas from './componenents/canvas/Canvas';
import Navbar from './componenents/navbar/Navbar';
import Footer from './componenents/footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Canvas/>
      <Footer/>
    </div>
  );
};

export default App;
