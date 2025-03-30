import React, { Component } from "react";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Home from './components/home'
import About from './components/about'
import { HashRouter  as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="bg-light">
     <Router>
        <Routes>
          <Route
            path="/"
            element={
             <Home/>
            }
          />
          <Route
            path="/about"
            element={
             <About/>
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
