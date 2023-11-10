import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light');

  const[alert, setAlert]=useState(null);

  const showAlert=(message, type)=>{
      setAlert({
          msg: message,
          type: type
      })
      setTimeout(()=>{
        setAlert(null)
      },1000); 
  }

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark Mode has been enabled", "success");
      //This is not a good practice 
      // document.title="TextUtils-Dark Mode";
      // setInterval(()=>{
      //   document.title="TextUtils is amazing."
      // },2000);
      // setInterval(()=>{
      //   document.title="Install TextUtils"
      // },1500);
    }
    else{
    setMode('light');
    document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled", "success");
      // document.title="TextUtils-Light Mode";
    }
  }

  return (
  <>
  <BrowserRouter>
    <Navbar title="TextUtils" about ="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3" mode={mode}>
      <Routes>
              <Route exact path="/about" element ={<About />}> </Route>
              <Route exact path="/" element={<TextForm  showAlert={showAlert} heading="Enter the text to analyze:" mode={mode}/> }></Route>
      </Routes>      
   </div>
  </BrowserRouter>
{/* <About/> */}
  </>
  );
}
export default App;

