import React, { useState } from 'react';
import TextInput from "../../component/TextInput";
import KeyPad from "../../component/KeyPad";
import './main.css'
const NumberInput = () => {
  const [value, setValue] = useState('');
  const numbers =["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  const handleChange = (event) => {
    console.log("changable",event.target.value)
    setValue(event.target.value);
    const inputValue = event.target.value;
    console.log("eventafter",inputValue)
   
    const numberRegex = /^[0-9\b]+$/; 
     
    if (numberRegex.test(event.target.value)) {
      console.log("eventregex",event.target.value)
      setValue(event.target.value);
    }
   
  };

  const handleButtonClick = (number) => {
    console.log("numverClicked",number)
    setValue((prevValue) => prevValue + number);
  };

  const handleBackspace =() => {
    console.log("backedhandle",value)
    setValue((preValue)=> preValue.slice(0, -1));
  }

  return (
    <div className="number-input">
      <TextInput   textValue={value} handleChangeText={(e)=>handleChange(e)}/>
    
     <div className="key-pad">
      <KeyPad number ={numbers}  onClick={(number)=>handleButtonClick(number)}/>
      <KeyPad onClickBackSpace={()=>handleBackspace()}/> 
      {/* handleBackspace="Backspace" */}
     </div>
    </div>
  );
};

export default NumberInput;


