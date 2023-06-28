import React from 'react'

export default function KeyPad(props) {
  return (
    <div className="digits">
    {props.number.map((number,index) => (
      <button
        key={index}
        onClick={props.handleButtonClick(number)}
      >
        <p>{props.ButtonClick}</p>
      </button>
    ))}
    <button onClick={props.handleBackspace}>C</button>
  </div>
  )
}
