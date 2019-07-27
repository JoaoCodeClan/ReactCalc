import React from "react";

const PadButton=props=>{
return(
  <button   onClick={()=>{props.getButtonValue(props.buttonValue)}}>{props.buttonValue}</button>

)


}


export default PadButton;
