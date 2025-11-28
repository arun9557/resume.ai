import React from 'react'
// ...existing code...
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Layout from './pages/Layout.jsx'
import Preview from './pages/Preview.jsx'
import ResumeBuild from './pages/ResumeBuild.jsx'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="app" element={<Layout />}>
        <Route index element={<Dashboard />} />         
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="resume-build" element={<ResumeBuild />} />
        {/* support old/alternate path /app/builder */}
        <Route path="builder" element={<ResumeBuild />} />
      </Route>
      <Route path="view/:resumeId" element={<Preview />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<div>SORYY BHAI KAM RAHA HU ISPE ABHI </div>} /> 
    </Routes>
  )
}

export default App