import React from 'react';
import './App.css';

function App() {



  return (
    <div className="App">
        <div  id="calc-container">
              <div id="display-container" > display</div>
              <div className="row" id="row1">
                  <button className="operatorspe" id="bttn-clear">AC</button>
                  <button className="operatorspe" id="bttn-negpos">+/-</button>
                  <button className="operatorspe" id="bttn-percent">%</button>
                  <button className="operator" id="bttn-division">÷</button>
              </div>
              <div  className="row" id="row2">
                  <button className="numpad" id="bttn-seven">7</button>
                  <button className="numpad" id="bttn-eight">8</button>
                  <button className="numpad" id="bttn-nine">9</button>
                  <button className="operator" id="bttn-times">x</button>
              </div>
              <div  className="row" id="row3">
                  <button className="numpad" id="bttn-four">4</button>
                  <button className="numpad" id="bttn-five">5</button>
                  <button className="numpad" id="bttn-six">6</button>
                  <button className="operator" id="bttn-minus">-</button>
              </div>
              <div  className="row" id="row4">
                  <button className="numpad" id="bttn-one">1</button>
                  <button className="numpad" id="bttn-two">2</button>
                  <button className="numpad" id="bttn-three">3</button>
                  <button className="operator" id="bttn-plus">+</button>
              </div>
              <div className="row" id="row5">
                  <button className="numpad" id="bttn-zero">0</button>
                  <button className="numpad" id="bttn-dot">.</button>
                  <button className="operator" id="bttn-equal">=</button>
              </div>
        </div>
    </div>
  );
}

export default App;
