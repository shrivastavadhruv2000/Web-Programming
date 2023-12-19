import React, { useState } from 'react'

export default function FormText(props) {


    const [text,setText] =useState("Love to play Basketball")
    const handleOnClick=()=>{
        let newText=text.toUpperCase()
         setText(newText)
    }
    const handlerOnClick=()=>{
      let newText=text.toLowerCase()
       setText(newText)
  }

    const handleOnChange=(event)=>{
         setText(event.target.value)
    }
    
    
  return (
    <div>
      <div className='container'>
        <hi>{props.heading}</hi>
     
  <div className="mb-3">
    {/* <label for="mybox" class="form-label">Example textarea</label> */}
    <textarea class="form-control" value={text} onChange={handleOnChange} rows="3"></textarea>
   
  </div>
  <button className="btn-btn-primar " onClick={handleOnClick}>convert to UpperCase</button>
  <button className="btn-btn-primar mx-3" onClick={handlerOnClick}>convert to LowerCase</button>
  </div>
  
  <div className=" container mb-3">
    <h2>Your Text Summary</h2>
    <p>Total Number of Characters:{text.length}</p>
    <p>Total Number Of Words:{text.split(" ").length}</p>
    <p>Time Taken To Read:{0.008*text.split(" ").length}</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>
    </div>
  )
}
