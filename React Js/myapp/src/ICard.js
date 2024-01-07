export default function Icard(props){
    let{name,dob,phone}=props.obj
    let stylobj={border:"3px groove blue",widht:"100px",backgroundColor:"purple"}
    
    return(
        <div style={stylobj}>
            <p>Name:{name}</p>
            <p>Dob:{dob}</p>
            <p>Phone:{phone}</p>
            
        </div>
    )
}