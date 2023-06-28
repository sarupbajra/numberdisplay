import React, { useState } from 'react';
import './main.css'
const NumberInput = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const inputValue = event.target.value;
    const numberRegex = /^[0-9\b]+$/; 

    if (numberRegex.test(inputValue)) {
      setValue(inputValue);
    }
  };

  const handleButtonClick = (number) => {
    setValue((prevValue) => prevValue + number);
  };
  const handleBackspace =() => {
    setValue((preValue)=> preValue.slice(0, -1));
  }

  return (
    <div className="number-input">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Enter only numbers"/>
      <div className="digits">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
          <button
            key={number}
            onClick={() => handleButtonClick(number)}
          >
            {number}
          </button>
        ))}
        <button onClick={handleBackspace}>C</button>
      </div>
    </div>
  );
};

export default NumberInput;


