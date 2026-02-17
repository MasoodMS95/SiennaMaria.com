import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import HomePage from './Components/HomePage/HomePage'


import './App.css'

function App() {

  return (
    <React.Fragment>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/socials" />
      </Routes>
    </React.Fragment>
  )
}

export default App
