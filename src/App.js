import React, { Component } from 'react';
import './App.css';
import Calculator from './components/Calculator/Calculator'
import Slider from './components/Slider/Slider'
import bmw from './components/Slider/picture/bmw.jpg';
import ferrari from './components/Slider/picture/ferrari.jpg';
import lamborg from './components/Slider/picture/lamborg.jpg';
import mers from './components/Slider/picture/mers.jpg';
import porshe from './components/Slider/picture/porshe.jpg';

const images = [bmw,ferrari,lamborg,mers,porshe];

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Slider images={images}/>
        <Calculator />
      </div>
    );
  }
}

export default App;
