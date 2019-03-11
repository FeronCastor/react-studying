import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Slider.css';

function modulo(a, b) {
	return (a % b + b) % b;
}

class Slider extends Component {

	static propTypes = {
		images: PropTypes.arrayOf(PropTypes.string).isRequired
	};

	constructor() {
		super();

		this.state = {
			currentImageIndex: 0
		};

		this.nextSlideHandler = this.nextSlideHandler.bind(this);
	}

	nextSlideHandler(e) {
		const {
			images
		} = this.props;
		const {
			direction
		} = e.currentTarget.dataset;
		const imagesCount = images.length;

		this.setState(({
			currentImageIndex
		}) => ({
			currentImageIndex: direction === 'next'
				? modulo(currentImageIndex + 1, imagesCount)
				: modulo(currentImageIndex - 1, imagesCount)
		}));
	}

	render() {
		const {
			images
		} = this.props;
		const {
			currentImageIndex
		} = this.state;
		const currentImage = images[currentImageIndex];

		return (
			<div className='slider'>
				<div className='slide'>
					<img src={currentImage} alt=''/>
					{currentImageIndex}
				</div>
				<div>
					<button className='prev' data-direction='prev' onClick={this.nextSlideHandler}>⟨</button>
					<button className='next' data-direction='next' onClick={this.nextSlideHandler}>⟩</button>
				</div>
			</div>
		);
	}
}

export default Slider;
