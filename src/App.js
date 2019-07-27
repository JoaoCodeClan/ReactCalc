import React from 'react';
import PadButton from './components/PadButton.js'
import './App.css';
import { evaluate } from 'mathjs';

class App extends React.Component  {

  state={
    	displayValue: "0",
    	waitingOnNext: false,
    	operator: undefined,
    	storedInput: undefined
    }

  numberInput=(event)=>{
    const{displayValue, waitingOnNext, storedInput}=this.state


    const bttnValue= event.target.value;
//     console.log(event);
// console.log(bttnValue)
    // this.setState({displayValue: bttnValue });

    if(waitingOnNext){

			this.setState({
      // storedInput: displayValue,
			displayValue: String(bttnValue),
			// waitingOnNext: false

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
  const{displayValue, waitingOnNext }=this.state;

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
      this.setState({displayValue: "0",
                    storedInput: undefined
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


operatorInput=(event)=>{
  const{displayValue, waitingOnNext, operator, storedInput }=this.state;

this.setState({waitingOnNext: true,
                storedInput: displayValue

              });
  const operatorClicked = event.target.value;
   let opResult= null;
  const  mathsOperation= `${storedInput}${operatorClicked}${displayValue}`;
 console.log(mathsOperation)
   if(storedInput&&operatorClicked!=="="&&waitingOnNext===true){
    opResult=evaluate(mathsOperation);
    this.setState({displayValue: opResult,
              storedInput:opResult
              })

  }else if(storedInput&&operatorClicked==="="){
    opResult=evaluate(mathsOperation);
    console.log(opResult);
    this.setState({displayValue: String(opResult),
              storedInput:undefined,
              waitingOnNext: false
              })
    mathsOperation=null;

  }

}

getButtonValue=(buttonValue)=>{

  this.setState({
    displayValue: buttonValue
  })
}



render(){
  return (


    <div className="App">
        <div  id="calc-container">
              <div id="display-container" >{this.state.displayValue}</div>
              <div className="row" id="row1">

              <PadButton buttonValue={"AC"} getButtonValue={this.getButtonValue}/>
              <PadButton buttonValue={"+-"} getButtonValue={this.getButtonValue}/>
              <PadButton buttonValue={"%"} getButtonValue={this.getButtonValue}/>
              <PadButton buttonValue={"/"} getButtonValue={this.getButtonValue}/>
                  // <button className="operatorspe" id="bttn-clear" onClick={this.clearDisplay}>AC</button>
                  // <button className="operatorspe" id="bttn-negpos" onClick={this.negDisplay}>+/-</button>
                  // <button className="operatorspe" id="bttn-percent" onClick={this.percentInput}>%</button>
                  // <button className="operator" value="/" id="bttn-division" onClick={this.operatorInput}>÷</button>
              </div>
              <div  className="row" id="row2">
              <PadButton buttonValue={"7"} getButtonValue={this.getButtonValue}/>
              <PadButton buttonValue={"8"} getButtonValue={this.getButtonValue}/>
              <PadButton buttonValue={"9"} getButtonValue={this.getButtonValue}/>
              <PadButton buttonValue={"*"} getButtonValue={this.getButtonValue}/>
                  // <button className="numpad" value="7" id="bttn-seven" onClick={this.numberInput}>7</button>
                  // <button className="numpad" value="8" id="bttn-eight" onClick={this.numberInput}>8</button>
                  // <button className="numpad" value="9" id="bttn-nine" onClick={this.numberInput}>9</button>
                  // <button className="operator" value="*" id="bttn-times" onClick={this.operatorInput}>x</button>
              </div>
              <div  className="row" id="row3">
              <PadButton buttonValue={"4"} getButtonValue={this.getButtonValue}/>
              <PadButton buttonValue={"5"} getButtonValue={this.getButtonValue}/>
              <PadButton buttonValue={"6"} getButtonValue={this.getButtonValue}/>
              <PadButton buttonValue={"-"} getButtonValue={this.getButtonValue}/>
                  // <button className="numpad" value="4" id="bttn-four" onClick={this.numberInput}>4</button>
                  // <button className="numpad" value="5" id="bttn-five" onClick={this.numberInput}>5</button>
                  // <button className="numpad" value="6" id="bttn-six" onClick={this.numberInput}>6</button>
                  // <button className="operator" value="-" id="bttn-minus" onClick={this.operatorInput}>-</button>
              </div>
              <div  className="row" id="row4">
              <PadButton buttonValue={"1"} getButtonValue={this.getButtonValue}/>
              <PadButton buttonValue={"2"} getButtonValue={this.getButtonValue}/>
              <PadButton buttonValue={"3"} getButtonValue={this.getButtonValue}/>
              <PadButton buttonValue= {"+"} getButtonValue={this.getButtonValue}/>
                  // <button className="numpad" value="1" id="bttn-one" onClick={this.numberInput}>1</button>
                  // <button className="numpad" value="2" id="bttn-two" onClick={this.numberInput}>2</button>
                  // <button className="numpad" value="3" id="bttn-three" onClick={this.numberInput}>3</button>
                  // <button className="operator" value="+" id="bttn-plus" onClick={this.operatorInput}>+</button>
              </div>
              <div className="row" id="row5">
              <PadButton buttonValue={"0"} getButtonValue={this.getButtonValue}/>
              <PadButton buttonValue={"."} getButtonValue={this.getButtonValue}/>
              <PadButton buttonValue={"="} getButtonValue={this.getButtonValue}/>
                  // 
                  // <button className="numpad" value="0" id="bttn-zero" onClick={this.numberInput}>0</button>
                  // <button className="numpad" value="." id="bttn-dot" onClick={this.decimalInput}>.</button>
                  // <button className="operator"  id="bttn-equal" >=</button>
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
