import React, { useState } from 'react';
import './main.css'; 
function main() {
  const [number, setNumber] = useState([]);
 
  const updateNumber = (value) => {
    setNumber([...number, value]);
}
  const backspace = () => {
    const tempNum = [...number]

    const filteredNum = tempNum?.filter((item, indx)=>{
          if(tempNum?.length - 1 !== indx){
              return item
          }
    })

    setNumber(filteredNum)
    console.log({filteredNum})

    }
  const createDigits = () => {
    const digits = [];

    for (let i = 0; i < 10; i++) {
      digits.push(
        <button onClick={() => updateNumber(i)} 
        key = {i} > {i} </button>
      )
    }
    return digits;
  }
  return (
    <div className='main'>
      <div className='displayNumber'>
        <div className='display'>
          {/* {result ? <span>(0)</span> : ''} */}
          {number.map((num)=>{return num})}
        </div>
        
        <div className='digits'>
          <button onClick={backspace} id='backspace'>C</button>
          { createDigits() }
        </div>
      </div>
    </div>
  );
}

export default main;


