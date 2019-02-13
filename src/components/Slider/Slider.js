import React, { Component } from 'react';
import './Slider.css';
import bmw from './picture/bmw.jpg';
import ferrari from './picture/ferrari.jpg';
import lamborg from './picture/lamborg.jpg';
import mers from './picture/mers.jpg';
import porshe from './picture/porshe.jpg';


class Slider extends Component {

  constructor() {
    super();

    this.state = {
        images: [bmw,ferrari,lamborg,mers,porshe],
        currentImageIndex: 0,
        isCycleMode: false
    };

    this.nextSlideHandler = this.nextSlideHandler.bind(this);
};

  nextSlideHandler(e) {
    let newIndex =  this.state.currentImageIndex;


    if (e.currentTarget.dataset.direction === 'next') {
      if (newIndex < this.state.images.length - 1) {
        newIndex = this.state.currentImageIndex + 1;
      }
    } else if (newIndex > 0) {
        newIndex = this.state.currentImageIndex - 1;
    }

    this.setState({currentImageIndex: newIndex });
  }

  render() {
    return (
      <div className='slider-v1'>
        <div>
            <button data-direction ='prev' onClick={this.nextSlideHandler}>PREV</button>
        </div>
        <div className='slide'>
          <img src={this.state.images[this.state.currentImageIndex]} alt=''/>
            { this.state.currentImageIndex }
        </div>
        <div>
            <button data-direction ='next' onClick={this.nextSlideHandler}>NEXT</button>
        </div>
        </div>
    );
  }
}

export default Slider;
