import React, { Component } from 'react';
import './Slider.css';


class Slider extends Component {

  constructor() {
    super();

    this.state = {
        images: [],
        currentImageIndex: 0,
        isCycleMode: false
    };

    this.nextSlideHandler = this.nextSlideHandler.bind(this);
};

  nextSlideHandler(e) {
    let newIndex =  this.state.currentImageIndex;
    console.log(e.currentTarget.dataset);
    if (e.currentTarget.dataset.direction === 'next') {
        newIndex = this.state.currentImageIndex + 1;
    } else {
        newIndex = this.state.currentImageIndex - 1;
    }

    this.setState({currentImageIndex: newIndex });
  }

  render() {
    return (
      <div className="slider-v1">
        <div>
            <button data-direction ="prev" onClick={this.nextSlideHandler}>PREV</button>
        </div>
        <div>
            {/*<img src="" alt=""/>*/}
            { this.state.currentImageIndex }
        </div>
        <div>
            <button data-direction ="next" onClick={this.nextSlideHandler}>NEXT</button>
        </div>
        </div>
    );
  }
}

export default Slider;
