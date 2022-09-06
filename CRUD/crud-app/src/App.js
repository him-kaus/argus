import React, { useState } from 'react'
import Homepage from './components/homepage/Homepage'
import Register from './components/register/Register'
import Login from './components/login/Login'
import {BrowserRouter,Routes ,Route,Navigate} from 'react-router-dom'
import Crud from './components/CRUD/Crud'
import Header from './components/Header'
import Header1 from './components/Header1'

const App = () => {
  const [user,setLoginUser] = useState({})
  const [getLogin,setLogin] = useState(true)
  return (
    
    <>
    
    <BrowserRouter>

    {/* {
      getLogin ? <Header />: <Header1 />
    } */}
    {/* <Header /> */}
    <Routes>
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