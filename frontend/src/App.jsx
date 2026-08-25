import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import HomePage from './components/HomePage/HomePage'
import LinkTree from './components/LinkTree/LinkTree'
import Setup from './components/Setup/Setup'
import NotFound from './components/NotFound/NotFound'

import './App.css'

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/socials" element={<LinkTree/>}/>
        <Route path="/setup" element={<Setup/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
