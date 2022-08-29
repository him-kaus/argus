import React, { useState } from 'react'
import './DigitalClock.css'

const DigitalClock = () => {
    // const heading = {
    //     textAlign: "center",
    //     margin:"30px 30px",
    // }
    const time1 = new Date().toLocaleTimeString();

    const [time , setTime] = useState(time1)

    const timeInterval = () => {
        const time1 = new Date().toLocaleTimeString();
        setTime(time1)
    }

    setInterval(timeInterval,1000)
  return (
    <>
    <div className='container'>
    <h1 className='heading'>{time1}</h1>
    </div>
    
    </>
  )
}

export default DigitalClock