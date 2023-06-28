import React from 'react'

export default function TextInput(props) {
  return (
    <input
        type="text"
        value={props.textValue}
        onChange={props.handleChangeText}
        placeholder="Enter only numbers"/>
  )
}
