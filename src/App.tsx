import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { AdminPage } from './components/admin'
import { LoginPage } from './components/login'
import { RedirectPage } from './components/redirect'

function App() {
  return (
    <Routes>
      <Route path='/' element={<RedirectPage/>}>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
      </Route>
  </Routes>
  )
}

export default App
