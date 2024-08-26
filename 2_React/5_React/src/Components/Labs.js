import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Labs = () => {
    const Navigate=useNavigate();
    function clickHandler(){
        Navigate("/about");
    }
  return (
    <div>
        <p>Labs</p>
        <button onClick={clickHandler}>Move to About Page</button>
    </div>
  )
}
