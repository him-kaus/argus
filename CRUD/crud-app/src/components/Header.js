import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <a class="navbar-brand" style={{color:'white'}} href="/register" onClick={()=>{navigate("/register")}}>Register</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/login" style={{color:'white'}} onClick={()=>{navigate("/login")}}>Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" style={{color:'white'}} href="/">Logout</a>
                        </li>
                    
                        
                    </ul>
                    
                </div>
            </nav>
        </>
    )
}

export default Header