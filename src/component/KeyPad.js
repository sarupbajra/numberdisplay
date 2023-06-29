import React from 'react'

export default function KeyPad(props) {
    console.log("property",props.onClickBackSpace)
  return (
    <div className="digits">
    {props.number && props.onClick && props.number.map((number,index) => {
        console.log("numberfromkeypaD",number)
        return (
            <button
            key={index}
            onClick={()=>props.onClick(number)}
            >
            {number}
          </button>
        )
        
   
})}
{/* {props.onClickBackSpace &&
<div onClick={()=>{props.onClickBackSpace()}}>hellooooo</div>} */}

  { props.onClickBackSpace && <button onClick={()=>props.onClickBackSpace()}>C</button>} 
  </div>
  )
}
