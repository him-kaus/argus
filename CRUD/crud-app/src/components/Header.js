import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()

    const [logout,setLogoout] = useState(false)

    const [login2,setLogin2] = useState(true)

    const logOut = () => {
        // console.log('hii')
        localStorage.clear();
        axios.get('http://localhost:8000/logout').then(res=>{
            
        })
        navigate('login')
    }

    const login = () => {
        setLogoout(true)
        setLogin2(false)
        navigate('login')
    }
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <a class="navbar-brand" style={{color:'white'}} href="/register" onClick={()=>{navigate("/register")}}>Register</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        {
                            login2 ? <li class="nav-item active">
                            <a class="nav-link" style={{color:'white'}} onClick={login}>Login</a>
                        </li>: null
                        }

                        {
                            logout ? <li class="nav-item">
                            <a class="nav-link" onClick={logOut} style={{color:'white'}}>Logout</a>
                        </li>: null
                        }
                        
                    
                        
                    </ul>
                    
                </div>
            </nav>
        </>
    )
}

export default Header