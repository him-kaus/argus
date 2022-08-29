import React from 'react'
import Homepage from './components/homepage/Homepage'
import Register from './components/register/Register'
import Login from './components/login/Login'
import {BrowserRouter,Routes ,Route} from 'react-router-dom'
import Crud from './components/CRUD/Crud'

const App = () => {
  return (
    <>
    <Crud />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/crud" element={<Crud />} />
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App