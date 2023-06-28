import React from 'react'
import './'
const ButtonBox=(props)=> {
    return (
      <button onClick= {props.onClick} className={props.className}>
      <p>{props.customClass}</p>
      </button>
 
    )
  }
  export default ButtonBox;