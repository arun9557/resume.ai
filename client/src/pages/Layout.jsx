import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <h1>Welcome to Layout</h1>
      <div>
        <outlet />
      </div>
    </div>
  )
}

export default Layout