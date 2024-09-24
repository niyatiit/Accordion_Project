import React from 'react'
import { useState } from 'react'
function FAQ({key, currElement , isToggle , isActive }) {
    const { answer , question } = currElement;  // destructuring answer property from currElement object
    

  return (
    <>
        {
           <li key={key}>
                <div className='accordion-grid'>
                    <p className=' className="accordion-question"'> {question} </p>
                    <button onClick={isToggle} className={isActive ? "active-btn" : ""}> {isActive ? "close" : "Show"} </button>
                </div>
                <p> {isActive && answer} </p>
           </li>
        }
    </>
  )
}

export default FAQ