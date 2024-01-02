import LifeCycleEx from "./LifeCycleEx";
import { useState } from "react";
import { useEffect } from "react";

export default function App2(){
    let[flag,setflag] = useState(true)
    let[msg,setmsg] = useState("this is a msg")

    useEffect(()=>{
        console.log("App2 mounted")
    },[])


    useEffect(()=>{
        console.log("App2 message updated")
    },[msg])

    useEffect(()=>{
        //console.log("App2 flag updated")
    },[flag])
    return(
        <>
        {flag && <LifeCycleEx msg ={msg}></LifeCycleEx>}
        </>
    )
}