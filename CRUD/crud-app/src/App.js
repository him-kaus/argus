import React, { useState } from 'react'
import Homepage from './components/homepage/Homepage'
import Register from './components/register/Register'
import Login from './components/login/Login'
import {BrowserRouter,Routes ,Route} from 'react-router-dom'
import Crud from './components/CRUD/Crud'
import Landing from './components/Landing'

const App = () => {
  const [user,setLoginUser] = useState({})
  
  return (
    
    <>
    <h1>hii</h1>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Landing />}/>
    <Route path="/" element={
      ()=>{
        user && user._id ? <Crud />:<Login setLoginUser={setLoginUser}/>
      }
    } />
      <Route exact path="/login" element={<Login setLoginUser={setLoginUser}/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/crud" element={<Crud />}/>
      <Route path="/crud/:id" element={<Crud />} />
      <Route path="/crud/login" element={<Login setLoginUser={setLoginUser}/>}/>
      <Route exact path="crud/home/:id" element={<Homepage />} />
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App