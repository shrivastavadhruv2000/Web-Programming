import React, { useState } from 'react'

export default function FormText(props) {


    const [text,setText] =useState("Love to play Basketball")
    const handleOnClick=()=>{
        let newText=text.toUpperCase()
         setText(newText)
    }

    const handleOnChange=(event)=>{
         setText(event.target.value)
    }
    
  return (
    <div>
        <hi>{props.heading}</hi>
     
  <div class="mb-3">
    {/* <label for="mybox" class="form-label">Example textarea</label> */}
    <textarea class="form-control" value={text} onChange={handleOnChange} rows="3"></textarea>
    <button className="btn-btn-primar" onClick={handleOnClick}>conver to UpperCase</button>
  </div>
    </div>
  )
}
