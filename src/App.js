import React from 'react';
import './App.css';

class App extends React.Component  {

  state={
    	displayValue: "0",
    	waitingOnNext: false,
    	operator: undefined,
    	storedInput: undefined
    }

  numberInput=(event)=>{

    const{displayValue, waitingOnNext, operator, storedInput }=this.state
    const bttnValue= event.target.value;

    this.setState({displayValue: bttnValue });

    if(waitingOnNext){
			this.setState({
			displayValue: String(bttnValue),
			waitingOnNext: false
			})
	}else{
    if(displayValue==='0'){
      this.setState({storedInput: displayValue });
      this.setState({displayValue: String(bttnValue)});
    }else{
      this.setState({storedInput:displayValue});
      this.setState({displayValue: displayValue + String(bttnValue)})
    }
	}
}

decimalInput=(event)=>{
  const{displayValue, waitingOnNext, operator, storedInput }=this.state;
  const bttnValue= ".";

  if(waitingOnNext){
		this.setState({storedInput: displayValue })
		this.setState({ displayValue: ".",
						waitingOnNext: false
		})}
	else if(displayValue.indexOf(".")===-1){
		this.setState({storedInput: displayValue});
		this.setState({displayValue: displayValue + ".",
					   waitingOnNext: false
		})
	}
}


clearDisplay=(event)=>{
      const{displayValue }=this.state;
      this.setState({displayValue: "0"})
}


negDisplay=(event)=>{
  const{displayValue, waitingOnNext, operator, storedInput }=this.state;

	if(displayValue.charAt(0)==="-"){
		this.setState({displayValue: displayValue.substr(1)})
	}else{
		this.setState({displayValue: "-"+ displayValue});
	}
}







render(){
  return (
    <div className="App">
        <div  id="calc-container">
              <div id="display-container" >{this.state.displayValue}</div>
              <div className="row" id="row1">
                  <button className="operatorspe" id="bttn-clear" onClick={this.clearDisplay}>AC</button>
                  <button className="operatorspe" id="bttn-negpos" onClick={this.negDisplay}>+/-</button>
                  <button className="operatorspe" id="bttn-percent">%</button>
                  <button className="operator" value="/" id="bttn-division">÷</button>
              </div>
              <div  className="row" id="row2">
                  <button className="numpad" value="7" id="bttn-seven" onClick={this.numberInput}>7</button>
                  <button className="numpad" value="8" id="bttn-eight" onClick={this.numberInput}>8</button>
                  <button className="numpad" value="9" id="bttn-nine" onClick={this.numberInput}>9</button>
                  <button className="operator" value="*" id="bttn-times">x</button>
              </div>
              <div  className="row" id="row3">
                  <button className="numpad" value="4" id="bttn-four" onClick={this.numberInput}>4</button>
                  <button className="numpad" value="5" id="bttn-five" onClick={this.numberInput}>5</button>
                  <button className="numpad" value="6" id="bttn-six" onClick={this.numberInput}>6</button>
                  <button className="operator" value="-" id="bttn-minus">-</button>
              </div>
              <div  className="row" id="row4">
                  <button className="numpad" value="1" id="bttn-one" onClick={this.numberInput}>1</button>
                  <button className="numpad" value="2" id="bttn-two" onClick={this.numberInput}>2</button>
                  <button className="numpad" value="3" id="bttn-three" onClick={this.numberInput}>3</button>
                  <button className="operator" value="+" id="bttn-plus">+</button>
              </div>
              <div className="row" id="row5">
                  <button className="numpad" value="0" id="bttn-zero" onClick={this.numberInput}>0</button>
                  <button className="numpad" value="." id="bttn-dot" onClick={this.decimalInput}>.</button>
                  <button className="operator"  id="bttn-equal">=</button>
              </div>
        </div>
    </div>
  );

  }
}

export default App;
