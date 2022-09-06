import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import './login.css'

const Login = ({setLoginUser}) => {

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
    console.log(user)
    localStorage.setItem('email2',JSON.stringify(user.email))
    if(email&&password){
      axios.post("http://localhost:8000/login",user).then(res=>{
        alert(res.data.message)
        setLoginUser(res.data.user)
        if(res.data.user===undefined){
          navigate('/register')
        }else{
          navigate('/Crud')
        }
        
      })
    }else{
      alert("Invalid Entries")
    }
    setUser({
      email:"",
      password:""
    })
    
    // navigate('/crud')
    
  }
  const route1 = () => {
    navigate('/register')
  }
  return (
    <>
    <div class="wrapper fadeInDown">
  <div id="formContent">
   
    <div class="fadeIn first center">
      <p>Teacher Login</p>
    </div>

    <form>
      <input type="text" id="login" class="fadeIn second" placeholder="Email" name='email' value={user.email} onChange={handle}/>
      <input type="password" id="password" class="fadeIn second" placeholder="password" name='password' value={user.password} onChange={handle}/>
      <button type="button" class="btn btn-primary" onClick={login}>Login</button>
      <button type="button" class="mt-2 btn btn-primary" onClick={route1}>Register</button>
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