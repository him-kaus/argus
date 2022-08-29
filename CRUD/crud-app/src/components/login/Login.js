import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import crud from '../CRUD/Crud'
import './login.css'

const Login = () => {

  const navigate = useNavigate()
  const [user,setUser] =  useState({
    email:"",
    password:""
  })

  const handle = (e) => {
    const {name,value} = e.target
    setUser({
      ...user,
      [name] : value
    })
  }

  const login = (e) => {
    // e.prventDefaulter();
    const {email,password} = user
    if(email&&password){
      axios.post("http://localhost:8000/login",user).then(res=>alert(res.data.message))
    }else{
      alert("Invalid Entries")
    }
    setUser({
      email:"",
      password:""
    })
    navigate('/crud')
    
  }
  const route1 = () => {
    navigate('/register')
  }
  return (
    <>
    <div class="wrapper fadeInDown">
  <div id="formContent">
   
    <div class="fadeIn first">
      <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
    </div>

    <form>
      <input type="text" id="login" class="fadeIn second" placeholder="Email" name='email' value={user.email} onChange={handle}/>
      <input type="text" id="password" class="fadeIn third" placeholder="password" name='password' value={user.password} onChange={handle}/>
      <button type="button" class="btn btn-primary btn-lg" onClick={login}>Login</button>
      <button type="button" class="btn btn-primary btn-lg" onClick={route1}>Register</button>
    </form>

    
    <div id="formFooter">
      <a class="underlineHover" href="#">Forgot Password?</a>
    </div>

  </div>
</div>
    </>
  )
}

export default Login