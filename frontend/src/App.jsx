import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import HomePage from './components/HomePage/HomePage'
import LinkTree from './components/LinkTree/LinkTree'

import './App.css'

function App() {

  return (
    <React.Fragment>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/socials" element={<LinkTree/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default App
