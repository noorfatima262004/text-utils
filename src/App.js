import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import './App.css';

function App() {
  const [mode, setMode] = useState("light");

  const removeAllBg = () => {
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-light');
  };

  const toggleState = (cls) => {
    removeAllBg();
    if (cls) {
      document.body.classList.add('bg-' + cls);
    }
    else
    if (mode === "light") {
      setMode("dark");
      // Set gradient for dark mode
      document.body.classList.add("dark-mode")
      document.body.style.background =  "#0a365a"
      document.body.style.color = "white";
    } else {
      setMode("light");

      // Set gradient for light mode
      document.body.classList.remove("dark-mode")
      document.body.style.background = " #f5f5f5";
      document.body.style.color = "black";
    }
  };

  return (
    <Router>
      <>
        <div>
          <Navbar title="Text-Analyzer" mode={mode} toggleState={toggleState} />
        </div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={
            <div className="container" style={{  width: "60vw" }}>
              <TextForm heading="Text- Analyzer" mode={mode} />
            </div>
          } />
        </Routes>
      </>
    </Router>
  );
}

export default App;
