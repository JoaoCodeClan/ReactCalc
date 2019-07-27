import React from "react";
import '../App.css';
const PadButton=props=>{
return(
  <button className={props.className} id={props.id} onClick={()=>{props.getButtonValue(props.buttonValue)}}>{props.buttonValue}</button>

)


}


export default PadButton;
