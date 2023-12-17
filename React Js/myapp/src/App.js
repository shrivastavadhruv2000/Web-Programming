import { Greeting } from "./Greeting";
import Icard from "./ICard";
import { Maths } from "./maths";
import Total from "./total";
import Welcome, { Drinks } from "./welcome";

function App() {

  let arr=[10,11,12,13]
  let x =  <p>Hello</p>
  console.log("type of x ",typeof(x))

  let obj={name:"Dhruv",dob:"1-01-2000",phone:"12334"}
  return (
    <>
    {/* <p>Hello Dhruv</p> */}
    {/* <Welcome></Welcome> */}
    <Greeting></Greeting>
    <Drinks></Drinks>
    <Maths num1={30} num2={20} op={"+"}></Maths>
    <Maths num1={30} num2={20} op={"-"}></Maths>
    <Total nums={arr}></Total>
    <Icard obj={obj}></Icard>
    

    </>
  );
} 
export default App;
