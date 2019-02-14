import React, { Component } from 'react';
import './Calculator.css';




class Calculator extends Component {

  constructor() {
    super();

    this.state = {
        
    };


};



  render() {
    return (
      <div className="calculator">
        <input />

        <select name='' id=''>
          <option value='+'>+</option>
          <option value='-'>-</option>
        </select>

        <input />

        <button>Get result</button>

        <div>
          Result: <span>0</span>
        </div>
      </div>
    );
  }
}

export default Calculator;