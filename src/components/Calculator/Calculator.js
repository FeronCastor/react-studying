import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {

	constructor(props) {
		super(props);

		this.state = {
			expression: ''
		};

		this.handleClick = this.handleClick.bind(this);
		this.resetInput = this.resetInput.bind(this);
		this.delSimbol = this.delSimbol.bind(this);
		this.findSum = this.findSum.bind(this);
	}

	handleClick(e) {
		const {
			token
		} = e.currentTarget.dataset;

		this.setState(({
			expression
		}) => ({
			expression: expression + token
		}));
	}

	resetInput() {
		this.setState({
			expression: ''
		});
	}

	delSimbol() {
		this.setState(({
			expression
		}) => ({
			expression: expression.slice(0, -1)
		}));
	}

	findSum() {
		this.setState({
			// eslint-disable-next-line
			expression: eval(this.state.expression).toString() 
		});
	}

	isExpressionValid() {
		const {
			expression
		} = this.state;

		if (!expression) {
			return false;
		}

		try {
			// eslint-disable-next-line
			eval(expression); 
			return true;
		} catch (err) {
			return false;
		}
	}

	render() {
		const {
			expression
		} = this.state;

		return (
			<div className='calc'>
				<div className='calc_display'>
					<input
						className='calc_display-input'
						type='text'
						value={expression}
						readOnly
					/>
				</div>
				<div className='calc_buttons'>
					<table className='calc_table'>
						<tbody>
							<tr className='calc_buttons-row'>
								<td>
									<button
										type='button' className='btn'
										onClick={this.resetInput}
									>CE
									</button>
								</td>
								<td>
									<button
										type='button' className='btn'
										onClick={this.delSimbol}
									>С
									</button>
								</td>
								<td>
									<button
										type='button' className='btn' data-token='/'
										onClick={this.handleClick}
									>/
									</button>
								</td>
								<td>
									<button
										type='button' className='btn' data-token='*'
										onClick={this.handleClick}
									>
										*
									</button>
								</td>
							</tr>
							<tr className='calc_buttons-row'>
								<td>
									<button
										type='button' className='btn' data-token='7'
										onClick={this.handleClick}
									>
										7
									</button>
								</td>
								<td>
									<button
										type='button' className='btn' data-token='8'
										onClick={this.handleClick}
									>
										8
									</button>
								</td>
								<td>
									<button
										type='button' className='btn' data-token='9'
										onClick={this.handleClick}
									>
										9
									</button>
								</td>
								<td>
									<button
										type='button' className='btn' data-token='-'
										onClick={this.handleClick}
									>
										-
									</button>
								</td>
							</tr>
							<tr className='calc_buttons-row'>
								<td>
									<button
										type='button' className='btn' data-token='4'
										onClick={this.handleClick}
									>
										4
									</button>
								</td>
								<td>
									<button
										type='button' className='btn' data-token='5'
										onClick={this.handleClick}
									>
										5
									</button>
								</td>
								<td>
									<button
										type='button' className='btn' data-token='6'
										onClick={this.handleClick}
									>
										6
									</button>
								</td>
								<td>
									<button
										type='button' className='btn' data-token='+'
										onClick={this.handleClick}
									>
										+
									</button>
								</td>
							</tr>
							<tr className='calc_buttons-row'>
								<td>
									<button
										type='button' className='btn' data-token='1'
										onClick={this.handleClick}
									>
										1
									</button>
								</td>
								<td>
									<button
										type='button' className='btn' data-token='2'
										onClick={this.handleClick}
									>
										2
									</button>
								</td>
								<td>
									<button
										type='button' className='btn' data-token='3'
										onClick={this.handleClick}
									>
										3
									</button>
								</td>
							</tr>
							<tr className='calc_buttons-row'>
								<td>
									<button
										type='button' className='btn' data-token='0'
										onClick={this.handleClick}
									>
										0
									</button>
								</td>
								<td>
									<button
										type='button' className='btn' data-token='.'
										onClick={this.handleClick}
									>
										.
									</button>
								</td>
								<td>
									<button
										type='button' className='btn' data-token='='
										disabled={!this.isExpressionValid()} onClick={this.findSum}
									>
										=
									</button>
								</td>
							</tr>
						</tbody>
					</table>

				</div>
			</div>
		);
	}
}

export default Calculator;
