import React from "react";
import '../App.css';
const PadButton=props=>{
return(
  <button className={props.className}  onClick={()=>{props.getButtonValue(props.buttonValue)}}>{props.buttonValue}</button>

)


}


export default PadButton;
