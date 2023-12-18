import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import FormText from './components/FormText';

function App() {

  
  return (
    <>
  <NavBar title="BasketBall" about="About BasketBall"/>
  
  <div className='container'>
  <FormText heading="Enter Your Text Here"/>
  </div>
    </>
   
  );
}

export default App;
