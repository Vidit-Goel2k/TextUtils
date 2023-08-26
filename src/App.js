import './App.css';
// import About from './components/About.js'; 
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert=(type,message)=>{
    setAlert({
      type: type,
      msg : message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1250);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      setBtnText("Enable Light Mode")
      document.body.style.backgroundColor = '#042743';
      showAlert("success", "You have successfully enabled DarkMode")
    }
    else{
      setMode('light')
      setBtnText("Enable Dark Mode")
      document.body.style.backgroundColor = 'white';
      showAlert("success", "You have successfully enabled LightMode")
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} btnText={btnText} />
        <Alert alert={alert} />

        <div className="container my-3">
          <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
        </div>

        {/* <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode}/>}></Route>
            <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}></Route>
          </Routes>
        </div>
      </Router> */}
    </>
  );
}

export default App;
