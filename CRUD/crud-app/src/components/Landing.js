import React from 'react'
import './landing.css'
import { useNavigate } from "react-router-dom";
import pic from '../images/bg4.png'

const Landing = () => {

    const navigate = useNavigate()

    const click = () => {
        navigate('register')
    }
  return (
    <>
        <div className="container row">
            <div className="left_pan col-6">
            <h2 className="heading">
                    Hii, Welcome Back Sir
                </h2><br /><br />
                <p className='desc'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p><br /><br /><br /><br />
                <button className='btn btn-outline-success custom' onClick={click} >Get Start</button>
            </div>
            <div className="right_pan col-6">
                <img src={pic} alt='img' className='img'/>
            </div>
        </div>
    </>
  )
}

export default Landing