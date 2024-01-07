import { Educationdetails } from "./EducationDetails";
import React from "react";

export class StudentData extends React.Component{
    constructor(){
        super()
        this.state={flag:false}
    }

    render(){
        return(
            <div>
                <p>Name: Dhruv</p>
                <p>dob: 14 apr 2000</p>
                Education Details:<input type="checkbox" onClick={(event)=>{
                    this.setState({flag:event.target.checked})

                }}/>
                {this.state.flag && <Educationdetails></Educationdetails>}
            </div>
        )
    }
}