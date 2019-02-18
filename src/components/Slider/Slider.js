import React, { Component } from 'react';
import './Slider.css';

function modulo(a, b) {
  return (a % b + b) % b;
 }

class Slider extends Component {

  constructor() {
    super();

    this.state = {
        currentImageIndex: 0,
        isCycleMode: false
    };

    this.nextSlideHandler = this.nextSlideHandler.bind(this);
};

  nextSlideHandler(e) {
    let newIndex =  this.state.currentImageIndex;


    if (e.currentTarget.dataset.direction === 'next') {
      newIndex = modulo(this.state.currentImageIndex + 1, this.props.images.length);
  } else {
      newIndex = modulo(this.state.currentImageIndex - 1, this.props.images.length);
  }

    this.setState({currentImageIndex: newIndex });
  }

  render() {
    return (
      <div className='slider'>
        <div className='slide'>
          <img src={this.props.images[this.state.currentImageIndex]} alt=''/>
            { this.state.currentImageIndex }
        </div>
        <div>
            <button class='prev' data-direction ='prev' onClick={this.nextSlideHandler}>⟨</button>
            <button class='next' data-direction ='next' onClick={this.nextSlideHandler}>⟩</button>
        </div>
      </div>
    );
  }
}

export default Slider;
