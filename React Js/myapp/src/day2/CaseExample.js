import React from "react"

export default class CaseExample extends React.Component{
    constructor(){
        super()
        this.state={str:"",rev:"",original:""}
    }

    revHandler=(event)=>{
        let isChecked=event.target.checked
        if(isChecked){
            let s=this.state.str
            let rev=""
            for(let i=s.length-1;i>=0;i--){
                rev+=s.charAt(i)
            }
            this.setState({str:rev,rev:rev})
        }
        else{
            this.setState({str:this.state.original})
        }
    }

    caseHandler=(event)=>{

        switch(event.target.id){
            case "uc":
                this.setState({str:this.state.str.toUpperCase()})
                break;
            case "lc":
                this.setState({str:this.state.str.toLowerCase()})
                break;
            case "tc":
                let s1=this.state.str.charAt(0) 
                this.setState({str:s1.toUpperCase() + this.state.str.substring(1).toLowerCase()})
                break;      
        }

    }


    render(){
        return(
            <div>
                Enter the String:<input type="text" onBlur={(event)=>
                this.setState({original:event.target.value,str:event.target.value})}/>
                <br></br>
                Reverse:<input type="checkbox" onClick={this.revHandler}/>
                <br></br>
                UC:<input type="radio" id="uc" name="click" onClick={this.caseHandler}/>
                <br></br>
                LC:<input type="radio" id="lc" name="click" onClick={this.caseHandler}/>
                <br></br>
                TC:<input type="radio" id="tc" name="click" onClick={this.caseHandler}/>
                <p>OutPut: {this.state.str}</p>
            </div>
        )
    }
}