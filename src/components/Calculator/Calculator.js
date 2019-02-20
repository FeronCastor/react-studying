import React, { Component } from 'react';
import './Calculator.css';




class Calculator extends Component {

  constructor() {
    super();

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
          </table>

        </div>
      </div>
    );
  }
}

export default Calculator;
