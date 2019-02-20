import React, { Component } from 'react';
import './Calculator.css';




class Calculator extends Component {

  constructor() {
    super();

    this.state = {
        result: 0,
        number1: 10,
        number2: 7
    };

    this.showResult = this.showResult.bind(this);
    this.handleNumber1Change = this.handleNumber1Change.bind(this);
    this.handleNumber2Change = this.handleNumber2Change.bind(this);

};

showResult() {
  this.setState({result: this.state.number1 + this.state.number2});
}

  render() {
    return (
      <div className="calculator">
        <input value={this.state.number1}/>

        <select name='' id=''>
          <option value='+'>+</option>
          <option value='-'>-</option>
        </select>

        <input value={this.state.number2}/>

        <button onClick={this.showResult}>=</button>

        <div>
          Result: <span>{this.state.result}</span>
        </div>
      </div>
    );
  }
}

export default Calculator;
