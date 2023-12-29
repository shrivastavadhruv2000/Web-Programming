import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import FormText from './components/FormText';
import AboutUs from './components/AboutUs';
import React,{ useState } from 'react';

function App() {
  const [mode,setMode]=useState('light');

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='white'
    }
  }
  
  return (
    <>
  <NavBar title="BasketBall" about="About BasketBall" mode={mode} toggleMode={toggleMode}/>
  
  <div className="container my-3">
  {/* <AboutUs></AboutUs> */}
  <FormText heading="Enter the text" mode={mode}/>
  </div>
    </>
   
  );
}

export default App;
