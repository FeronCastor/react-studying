import React, { Component } from 'react';
import './App.css';
import Slider from './components/Slider/Slider'
import bmw from './src/pictures/bmw.jpg';
import ferrari from './src/pictures/ferrari.jpg';
import lamborg from './src/pictures/lamborg.jpg';
import mers from './src/pictures/mers.jpg';
import porshe from './src/pictures/porshe.jpg';

const images = [bmw,ferrari,lamborg,mers,porshe];

class App extends Component {
  render() {
    return (
      <div className="App">

        <Slider images={images}/>
        
      </div>
    );
  }
}

export default App;
