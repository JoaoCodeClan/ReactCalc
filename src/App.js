import React from 'react';
import PadButton from './components/PadButton.js'
import './App.css';
import { evaluate } from 'mathjs';

class App extends React.Component  {

  state={
    	displayValue: "0",
    	waitingOnNext: false,
      operator: undefined,
    	operatorDisplay: false,
    	storedInput: undefined
    }

  numberInput=(digit)=>{
    const{displayValue, waitingOnNext, operatorDisplay}=this.state


    const bttnValue= digit;

    if(waitingOnNext&&operatorDisplay===false){

			this.setState({	displayValue:  bttnValue,
        operatorDisplay: true

      })

	}else if (waitingOnNext &&operatorDisplay===true){
    this.setState({displayValue: displayValue + bttnValue})


  }else{
    if(displayValue==='0'){
        this.setState({displayValue: bttnValue});

    }else{
        this.setState({displayValue: displayValue + bttnValue})

    }
	}
}

decimalInput=()=>{
  const{displayValue, waitingOnNext }=this.state;

  if(waitingOnNext){
		// this.setState({storedInput: displayValue })
		this.setState({ displayValue: ".",
						// waitingOnNext: false
		})}
	else if(displayValue.indexOf(".")===-1){
		// this.setState({storedInput: displayValue});
		this.setState({displayValue: displayValue + ".",
					   // waitingOnNext: false
		})
	}
}


clearDisplay=(event)=>{
      this.setState({displayValue: "0",
                    storedInput: undefined,
                    waitingOnNext: false
    })
}


negDisplay=(event)=>{
  const{displayValue }=this.state;
	if(displayValue.charAt(0)==="-"){
		this.setState({displayValue: displayValue.substr(1)})
	}else{
		this.setState({displayValue: "-"+ displayValue});
	}
}


percentInput=(event)=>{
const{displayValue }=this.state;
	this.setState({displayValue: String(parseFloat(displayValue)/100)});
}


operatorInput=(operatorClicked)=>{
  const{displayValue, waitingOnNext,  storedInput }=this.state;
  this.setState({operator: operatorClicked })

   let opResult= null;

   if(waitingOnNext===true){

    const  mathsOperation= `${storedInput}${operatorClicked}${displayValue}`;

    opResult=evaluate(mathsOperation);
    this.setState({displayValue: opResult,
              storedInput:opResult
              })

  }else if(waitingOnNext===false){
     const valueToStore = this.state.displayValue
    this.setState({ storedInput: valueToStore})
            }
  this.setState({waitingOnNext: true,
                operatorDisplay: false})

}

getTotal=()=>{
  const{displayValue,  operator, waitingOnNext,  storedInput }=this.state;
  const  mathsOperation= `${storedInput}${operator}${displayValue}`;
  let total=evaluate(mathsOperation);
  this.setState({displayValue: total,
  storedInput: total,
  waitingOnNext: false,
  operator: undefined
});

}

getButtonValue=(buttonValue)=>{

  if(buttonValue==="/"||buttonValue==="*"||buttonValue==="-"||buttonValue==="+"){

    this.operatorInput(buttonValue);
  }else if(buttonValue===".") {

    this.decimalInput();

  }else if(buttonValue==="=") {

    this.getTotal();

  }else{
    this.numberInput(buttonValue);
  }


}



render(){


  return (


    <div className="App">
        <div  id="calc-container">
              <div id="display-container" >{this.state.displayValue}</div>
              <div className="row" id="row1">
              <PadButton className={"numpad"} buttonValue={"AC"} getButtonValue={this.clearDisplay}/>
              <PadButton className={"operatorspe"} buttonValue={"+-"} getButtonValue={this.negDisplay}/>
              <PadButton className={"operatorspe"} buttonValue={"%"} getButtonValue={this.percentInput}/>
              <PadButton className={"operator"} buttonValue={"/"} getButtonValue={this.operatorInput}/>

              </div>
              <div  className="row" id="row2">
              <PadButton className={"numpad"} buttonValue={"7"} getButtonValue={this.getButtonValue}/>
              <PadButton className={"numpad"} buttonValue={"8"} getButtonValue={this.getButtonValue}/>
              <PadButton className={"numpad"} buttonValue={"9"} getButtonValue={this.getButtonValue}/>
              <PadButton className={"operator"} buttonValue={"*"} getButtonValue={this.getButtonValue}/>

              </div>
              <div  className="row" id="row3">
              <PadButton className={"numpad"} buttonValue={"4"} getButtonValue={this.getButtonValue}/>
              <PadButton className={"numpad"} buttonValue={"5"} getButtonValue={this.getButtonValue}/>
              <PadButton className={"numpad"} buttonValue={"6"} getButtonValue={this.getButtonValue}/>
              <PadButton className={"operator"} buttonValue={"-"} getButtonValue={this.getButtonValue}/>

              </div>
              <div  className="row" id="row4">
              <PadButton className={"numpad"} buttonValue={"1"} getButtonValue={this.getButtonValue}/>
              <PadButton className={"numpad"} buttonValue={"2"} getButtonValue={this.getButtonValue}/>
              <PadButton className={"numpad"} buttonValue={"3"} getButtonValue={this.getButtonValue}/>
              <PadButton className={"operator"} buttonValue= {"+"} getButtonValue={this.getButtonValue}/>

              </div>
              <div className="row" id="row5">
              <PadButton className={"numpad"} id={"bttn-zero"} buttonValue={"0"} getButtonValue={this.getButtonValue}/>
              <PadButton className={"numpad"} buttonValue={"."} getButtonValue={this.getButtonValue}/>
              <PadButton className={"operator"} buttonValue={"="} getButtonValue={this.getButtonValue}/>

              </div>
        </div>
    </div>











    // <div className="App">
    //     <div  id="calc-container">
    //           <div id="display-container" >{this.state.displayValue}</div>
    //           <div className="row" id="row1">
    //               <button className="operatorspe" id="bttn-clear" onClick={this.clearDisplay}>AC</button>
    //               <button className="operatorspe" id="bttn-negpos" onClick={this.negDisplay}>+/-</button>
    //               <button className="operatorspe" id="bttn-percent" onClick={this.percentInput}>%</button>
    //               <button className="operator" value="/" id="bttn-division" onClick={this.operatorInput}>÷</button>
    //           </div>
    //           <div  className="row" id="row2">
    //               <button className="numpad" value="7" id="bttn-seven" onClick={this.numberInput}>7</button>
    //               <button className="numpad" value="8" id="bttn-eight" onClick={this.numberInput}>8</button>
    //               <button className="numpad" value="9" id="bttn-nine" onClick={this.numberInput}>9</button>
    //               <button className="operator" value="*" id="bttn-times" onClick={this.operatorInput}>x</button>
    //           </div>
    //           <div  className="row" id="row3">
    //               <button className="numpad" value="4" id="bttn-four" onClick={this.numberInput}>4</button>
    //               <button className="numpad" value="5" id="bttn-five" onClick={this.numberInput}>5</button>
    //               <button className="numpad" value="6" id="bttn-six" onClick={this.numberInput}>6</button>
    //               <button className="operator" value="-" id="bttn-minus" onClick={this.operatorInput}>-</button>
    //           </div>
    //           <div  className="row" id="row4">
    //               <button className="numpad" value="1" id="bttn-one" onClick={this.numberInput}>1</button>
    //               <button className="numpad" value="2" id="bttn-two" onClick={this.numberInput}>2</button>
    //               <button className="numpad" value="3" id="bttn-three" onClick={this.numberInput}>3</button>
    //               <button className="operator" value="+" id="bttn-plus" onClick={this.operatorInput}>+</button>
    //           </div>
    //           <div className="row" id="row5">
    //               <button className="numpad" value="0" id="bttn-zero" onClick={this.numberInput}>0</button>
    //               <button className="numpad" value="." id="bttn-dot" onClick={this.decimalInput}>.</button>
    //               <button className="operator"  id="bttn-equal" >=</button>
    //           </div>
    //     </div>
    // </div>
  );

  }
}

export default App;
