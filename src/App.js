import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <div  id="calc-container">
      <div id="display-container">
      </div>
      <div className="row" id="row1">
      <button id="bttn-clear">AC</button>
      <button id="bttn-negpos">+/-</button>
      <button id="bttn-percent">%</button>
      <button id="bttn-division">÷</button>
      </div>
      <div  className="row" id="row2">
      <button id="bttn-seven">7</button>
      <button id="bttn-eight">8</button>
      <button id="bttn-nine">9</button>
      <button id="bttn-times">x</button>
      </div>
      <div  className="row" id="row3">
      <button id="bttn-four">4</button>
      <button id="bttn-five">5</button>
      <button id="bttn-six">6</button>
      <button id="bttn-minus">-</button>
      </div>
      <div  className="row" id="row4">
      <button id="bttn-one">1</button>
      <button id="bttn-two">2</button>
      <button id="bttn-three">3</button>
      <button id="bttn-plus">+</button>
      </div>
      <div className="row" id="row5">
      <button id="bttn-zero">0</button>
      <button id="bttn-dot">.</button>
      <button id="bttn-equal">=</button>

      </div>
    </div>
    </div>
  );
}

export default App;
