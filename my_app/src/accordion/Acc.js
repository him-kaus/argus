import React, { useState } from 'react'
import './accor.css'
import Api from './api.js'
import AddIcon from '@mui/icons-material/Add';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Acc = () => {
  const [show,setShow] = useState(false)
  return (
    <>
        <div className='mt-5 text-center div1'>
            <h1 className='heading'>Accordions</h1>
            {Api.map((curEle) => {
              return(
                
                <div className="entry">
                  
              <div className='div2'>
              
                <p onClick={() => {
                  setShow(!show)
                }}>{show?<RemoveCircleOutlineIcon /> :<AddIcon />}{curEle.question} </p>
                
                
              </div>
              {show && <p className='answer'>{curEle.answer}</p>}
            </div>
              )
            })}
            
        </div>
    </>
  )
}

export default Acc

// /home/himanshu/my_app/node_modules/bootstrap/dist/css/bootstrap.min.css