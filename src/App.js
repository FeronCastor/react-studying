import React from 'react';
import './App.css';
import Slider from './components/Slider/Slider';
import Calculator from './components/Calculator/Calculator';
import bmw from './pictures/bmw.jpg';
import ferrari from './pictures/ferrari.jpg';
import lamborg from './pictures/lamborg.jpg';
import mers from './pictures/mers.jpg';
import porshe from './pictures/porshe.jpg';

const images = [bmw, ferrari, lamborg, mers, porshe];

function App() {
	return (
		<div className='App'>
			<Slider images={images}/>
			<Calculator/>
		</div>
	);
}

export default App;
