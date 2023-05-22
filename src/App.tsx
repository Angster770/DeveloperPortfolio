import React from "react"
import { MainPage } from "./LandingPage/MainPage"
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      {/* <Router> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      {/* </Router> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </>
  )
}

export default App
