import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        
        <Slider 
          images={images}
        />
      </div>
    );
  }
}

export default App;
