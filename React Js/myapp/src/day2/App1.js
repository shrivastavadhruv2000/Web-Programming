import { useState } from "react";
import Hello from "./Hello";
import SayHi from "./sayHi";
import CaseExample from "./CaseExample";
import ShowMonthName from "./ShowMonthName";
import { HalfString } from "./halfString";

export default function App1()
{
    
    
    let [col,setcol] = useState("red")
    function handler(event)
    {
        console.log(event.target.value)
        setcol(event.target.value)
    }



    return(
        <>
       
        
         Enter Color:<input type="color" onChange={handler} /> 
        <Hello name={"Dhruv"} col={col}></Hello> 
        <SayHi msg="hello" ></SayHi> 
        <CaseExample></CaseExample>
        <ShowMonthName></ShowMonthName>
        <HalfString></HalfString>
       
        </>
    )
}


