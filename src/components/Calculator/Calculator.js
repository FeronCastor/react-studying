import React, { Component } from 'react';
import './Calculator.css';




class Calculator extends Component {

  constructor(props) {
    super(props);

    this.state = {
      expression: ' ',
    };


}

  render() {
    return (
      <div className='calc'>
        <div className='calc_display'>
          <input type='text' name='' className='calc_display-input'/>
        </div>
        <div className='calc_buttons'>
          <table className='calc_table'>
            <tr className='calc_buttons-row'>
              <td>
                <button type='button' className='btn'>CE</button>
              </td>
              <td>
                <button type='button' className='btn'>С</button>
              </td>
              <td>
                <button type='button' className='btn' data-token ='/' onClick={this.props.expression}>/</button>
              </td>
              <td>
                <button type='button' className='btn' data-token ='*' onClick={this.props.expression}>*</button>
              </td>
            </tr>
            <tr className='calc_buttons-row'>
              <td>
                <button type='button' className='btn' data-token ='7' onClick={this.props.expression}>7</button>
              </td>
              <td>
                <button type='button' className='btn' data-token ='8' onClick={this.props.expression}>8</button>
              </td>
              <td>
                <button type='button' className='btn' data-token ='9' onClick={this.props.expression}>9</button>
              </td>
              <td>
                <button type='button' className='btn' data-token ='-' onClick={this.props.expression}>-</button>
              </td>
            </tr>
            <tr className='calc_buttons-row'>
              <td>
                <button type='button' className='btn' data-token ='4' onClick={this.props.expression}>4</button>
              </td>
              <td>
                <button type='button' className='btn' data-token ='5' onClick={this.props.expression}>5</button>
              </td>
              <td>
                <button type='button' className='btn' data-token ='6' onClick={this.props.expression}>6</button>
              </td>
              <td>
                <button type='button' className='btn' data-token ='+' onClick={this.props.expression}>+</button>
              </td>
            </tr>
            <tr className='calc_buttons-row'>
              <td>
                <button type='button' className='btn' data-token ='1' onClick={this.props.expression}>1</button>
              </td>
              <td>
                <button type='button' className='btn' data-token ='2' onClick={this.props.expression}>2</button>
              </td>
              <td>
                <button type='button' className='btn' data-token ='3' onClick={this.props.expression}>3</button>
              </td>
            </tr>
            <tr className='calc_buttons-row'>
              <td>
                <button type='button' className='btn' data-token ='0' onClick={this.props.expression}>0</button>
              </td>
              <td>
                <button type='button' className='btn' data-token ='.' onClick={this.props.expression}>.</button>
              </td>
              <td>
                <button type='button' className='btn' data-token ='=' onClick={this.props.expression}>=</button>
              </td>
            </tr>
          </table>

        </div>
      </div>
    );
  }
}

export default Calculator;
