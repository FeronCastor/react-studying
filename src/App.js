import React, { Component } from 'react';
import './App.css';
import Slider from './components/Slider/Slider'
import bmw from './pictures/bmw.jpg';
import ferrari from './pictures/ferrari.jpg';
import lamborg from './pictures/lamborg.jpg';
import mers from './pictures/mers.jpg';
import porshe from './pictures/porshe.jpg';

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
