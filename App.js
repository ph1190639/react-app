
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';

import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// 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

function App() {
  const [mode, setMode]= useState('light');
  const [alert, setAlert]= useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg:message, type:type
    })
    setTimeout(()=>{
      setAlert(null)
    }, 1500);

  }


  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode ha been enabled", "success")

    }
    else {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode ha been enabled", "success")
    }
  }
  return (
    <>
    
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    
    <div className="container my-3">
      
      <TextForm showAlert={showAlert} heading="Enter The Text To Analyze" mode={mode} />
            
          
     
      
    </div>
    
    
    </>
  );
}

export default App;


