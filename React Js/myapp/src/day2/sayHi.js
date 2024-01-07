import { useState } from "react"

export default function SayHi(){
    // let msg=""
    // let arr=useState("initial val")
    //  arr[1]=useState(" 2nd initial val")
     let [msg,setmsg]=useState("")
     let [msg2,setmsg2]=useState("")

     function handler(){
        setmsg("hi")
        
        console.log("msg =",msg)
     }

     function handler2(){
        setmsg2("I am Fine")

     }

    return (
        <>
        <input type="button" value="say hi" onClick={handler} />
        {/* <p>Msg={arr[1]}</p> */}
        <p>{msg}</p>
        <input type="button" value="how are you?" onClick={handler2}/>
        <p>{msg2}</p>
        </>

    )

}