import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import FormText from './components/FormText';
import AboutUs from './components/AboutUs';

function App() {

  
  return (
    <>
  <NavBar title="BasketBall" about="About BasketBall"/>
  
  <div className='container'>
  <AboutUs></AboutUs>
  {/* <FormText heading="Enter Your Text Here"/> */}
  </div>
    </>
   
  );
}

export default App;
