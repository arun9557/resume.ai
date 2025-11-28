import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Layout from './pages/Layout.jsx'
import Preview from './pages/Preview.jsx'
import ResumeBuild from './pages/ResumeBuild.jsx'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </>
  )
}

export default App