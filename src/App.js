import Alert from './components/Alert';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from 'react';
import { useState } from 'react';
function App() {
  const [mode, setMode] = useState('dark');//Wheather Darkmode Is Enable Or Not
  const [alert, setAlert] = useState(null);
  const showAlert = (type) => {
    setAlert({
      msg: "let's start building",
      type: type
    })
  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.title = 'TextUtils - light Mode';
      setAlert("Light Mode Has Been Enabled", "Success");
      // setInterval(() => {
      //   document.title = 'TextUtils - light Mode';
      // }
      // , 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }
      // , 1500);
    }

    else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      document.title = 'TextUtils - Dark Mode';
      setAlert("Light Mode Has Been Enabled", "Success");
    }
  }
  return (
    <div>
      <Navbar title="FirstApp" mode={mode} onClick={toggleMode} />
      <Alert alert={alert} />
      <div className="contaner">
        <div className="container my-3"  >
        </div>
        <TextForm showAlert={showAlert} heading="Enter Your Text To Analyze" />
        <About />
        <button onClick={toggleMode} type="button" class="btn btn-success">Change Your Theme</button>
      </div>
    </div>
  )
}

export default App

