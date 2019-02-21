import React, { Component } from 'react';
import './Calculator.css';




class Calculator extends Component {

  constructor(props) {
    super(props);

    this.state = {

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
                <button type='button' className='btn'>/</button>
              </td>
              <td>
                <button type='button' className='btn'>*</button>
              </td>
            </tr>
            <tr className='calc_buttons-row'>
              <td>
                <button type='button' className='btn'>7</button>
              </td>
              <td>
                <button type='button' className='btn'>8</button>
              </td>
              <td>
                <button type='button' className='btn'>9</button>
              </td>
              <td>
                <button type='button' className='btn'>-</button>
              </td>
            </tr>
            <tr className='calc_buttons-row'>
              <td>
                <button type='button' className='btn'>4</button>
              </td>
              <td>
                <button type='button' className='btn'>5</button>
              </td>
              <td>
                <button type='button' className='btn'>6</button>
              </td>
              <td>
                <button type='button' className='btn'>+</button>
              </td>
            </tr>
            <tr className='calc_buttons-row'>
              <td>
                <button type='button' className='btn'>1</button>
              </td>
              <td>
                <button type='button' className='btn'>2</button>
              </td>
              <td>
                <button type='button' className='btn'>3</button>
              </td>
            </tr>
            <tr className='calc_buttons-row'>
              <td>
                <button type='button' className='btn'>0</button>
              </td>
              <td>
                <button type='button' className='btn'>.</button>
              </td>
              <td>
                <button type='button' className='btn'>=</button>
              </td>
            </tr>
          </table>

        </div>
      </div>
    );
  }
}

export default Calculator;
