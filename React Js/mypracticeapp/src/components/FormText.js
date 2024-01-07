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

    const handleOnClear=(event)=>{
      setText(" ")
 }
    
    
  return (
    <div>
      <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <hi>{props.heading}</hi>
     
        <div className="mb-3">
          {/* <label for="mybox" class="form-label">Example textarea</label> */}
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}  rows="3"></textarea>
   
        </div>
        <button className="btn-btn-primar " onClick={handleOnClick}>convert to UpperCase</button>
        <button className="btn-btn-primar mx-3" onClick={handlerOnClick}>convert to LowerCase</button>
        <button className='btn-btn-primary' onClick={handleOnClear}>Clear</button>
      </div>
  
      <div className=" container mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>Total Number of Characters:{text.length}</p>
        <p>Total Number Of Words:{text.split(" ").length}</p>
        <p>Time Taken To Read:{0.008*text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to see preview"}</p>
      </div>
    </div>
  )
}
