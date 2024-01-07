export function Maths(val){
    let n1=val.num1   //Using Props
    let n2=val.num2
    let op=val.op 
    let result

    switch(op)
    {
        case "+":result=n1+n2;break;
        case "-":result=n1-n2;break;
        case "*":result=n1*n2;break;
        default : result = NaN ; break;

        

    }
    return(
       <p>{n1} {op} {n2} = {result}</p>
    )
}