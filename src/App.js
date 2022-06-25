import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  function toggleModeDark() {
    let checked = document.getElementById("darkMode").checked;
    if (checked === true) {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("Dark Mode enabled", "success");
      // We are adding the background color here because if we do it in the Homepage component it will be only change bg of container not of body
    } else {
      if (document.body.style.backgroundColor !== "white") {
        setMode("light");
        document.body.style.backgroundColor = "white";
        showAlert("Light Mode enabled", "success");
      }
    }
    // code for chamkta title
    // setInterval(()=>{
    //   document.title="Your Pc Is Hacked"
    // },1500)
    // setInterval(()=>{
    //   document.title="Install our app now"
    // },2000)
  }

  return (
    <>
      <Router>
        <Header
          title="TextUtilis"
          mode={mode}
          toggleFuncDark={toggleModeDark}
        />
        <Alert alert={alert}></Alert>
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                heading="Welcome to my personal text editor"
                mode={mode}
                showAlert={showAlert}
              />
            }
          ></Route>
          <Route path="/about" element={<About mode={mode} />}></Route>
        </Routes>
        <Footer mode={mode} />
      </Router>
    </>
  );
}

export default App;

/* 
This two functions were made for a excercise , now i am removing them
function toggleModeRed()
  {
    let check = document.getElementById('redMode').checked
    if(check===true)
    {
      setMode('red')
      showAlert("Red mode activated",'success')
      document.body.style.backgroundColor="#c90000"
    }
    else{
      if(document.body.style.backgroundColor !== 'white'){
        setMode("light")
        showAlert('Light Mode enabled','success')
        document.body.style.backgroundColor="white"
      }
    }
  }
  function toggleModeGreen()
  {
    let check = document.getElementById("greenMode").checked
    if(check===true)
    {
      setMode("green")
      showAlert("Green mode enabled",'success')
      document.body.style.backgroundColor="green"
    }
    else{
      if(document.body.style.backgroundColor !== 'white'){
        setMode("light")
        showAlert('Light Mode enabled','success')
        document.body.style.backgroundColor="white"
      }
    }
  }
  
Props given to header were:
 toggleFuncRed ={toggleModeRed} toggleFuncGreen = {toggleModeGreen}
  there are used to turn on and off green and red mode*/
