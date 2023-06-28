import React from 'react'
import './welcome.css'
import { useNavigate } from 'react-router-dom'
  
export default function Welcome() {
  const navigate = useNavigate()
  return (
    <div>welcome page
        <div className='arr-right'>
            <h1>Welcome-page</h1>
            <div>
              <button onClick={()=>navigate("/main")} id= 'navigate'><i className="fa fa-solid fa-arrow-right"></i></button>
            </div>

        </div>
    </div>
    
  )
}
