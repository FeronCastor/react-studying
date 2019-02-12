import React, { Component } from 'react';
import './SliderV1.css';


class SliderV1 extends Component {

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
            <button data-direction ="prev" onClick={this.nextSlideHandler.bind(this)}>PREV</button>
        </div>
        <div>
            {/*<img src="" alt=""/>*/}
            { this.state.currentImageIndex }
        </div>
        <div>
            <button data-deriction ="next" onClick={this.nextSlideHandler.bind(this)}>NEXT</button>
        </div>
        </div>
    );
  }
}

export default SliderV1;