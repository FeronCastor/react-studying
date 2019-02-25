import React, { Component } from 'react';
import './Calculator.css';



class Calculator extends Component {

  constructor(props) {
    super(props);

    this.state = {
      expression: ''
    };

this.handleClick = this.handleClick.bind(this);
}

handleClick(e) {
  this.setState({
    expression: this.state.expression + e.currentTarget.dataset.token
});
};

  render() {
    return (
      <div className='calc'>
        <div className='calc_display'>
          <input value={this.state.expression} type='text' name='' className='calc_display-input'/>
        </div>
        <div className='calc_buttons'>
          <table className='calc_table'>
            <tbody>
            <tr className='calc_buttons-row'>
              <td>
                <button type='button' className='btn'>CE</button>
              </td>
              <td>
                <button type='button' className='btn'>С</button>
              </td>
              <td>
                <button type='button' className='btn' data-token ='/' onClick={this.handleClick}>/</button>
              </td>
              <td>
                <button type='button' className='btn' data-token ='*' onClick={this.handleClick}>*</button>
              </td>
            </tr>
            <tr className='calc_buttons-row'>
              <td>
                <button type='button' className='btn' data-token ='7' onClick={this.handleClick}>7</button>
              </td>
              <td>
                <button type='button' className='btn' data-token ='8' onClick={this.handleClick}>8</button>
              </td>
              <td>
                <button type='button' className='btn' data-token ='9' onClick={this.handleClick}>9</button>
              </td>
              <td>
                <button type='button' className='btn' data-token ='-' onClick={this.handleClick}>-</button>
              </td>
            </tr>
            <tr className='calc_buttons-row'>
              <td>
                <button type='button' className='btn' data-token ='4' onClick={this.handleClick}>4</button>
              </td>
              <td>
                <button type='button' className='btn' data-token ='5' onClick={this.handleClick}>5</button>
              </td>
              <td>
                <button type='button' className='btn' data-token ='6' onClick={this.handleClick}>6</button>
              </td>
              <td>
                <button type='button' className='btn' data-token ='+' onClick={this.handleClick}>+</button>
              </td>
            </tr>
            <tr className='calc_buttons-row'>
              <td>
                <button type='button' className='btn' data-token ='1' onClick={this.handleClick}>1</button>
              </td>
              <td>
                <button type='button' className='btn' data-token ='2' onClick={this.handleClick}>2</button>
              </td>
              <td>
                <button type='button' className='btn' data-token ='3' onClick={this.handleClick}>3</button>
              </td>
            </tr>
            <tr className='calc_buttons-row'>
              <td>
                <button type='button' className='btn' data-token ='0' onClick={this.handleClick}>0</button>
              </td>
              <td>
                <button type='button' className='btn' data-token ='.' onClick={this.handleClick}>.</button>
              </td>
              <td>
                <button type='button' className='btn' data-token ='=' onClick={this.handleClick}>=</button>
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
