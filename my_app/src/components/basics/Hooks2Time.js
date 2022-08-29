import React, { useState } from 'react'

const Hooks2Time = () => {
    
    let time = new Date().toLocaleTimeString();
    const [time1,setTime] = useState(time)

    function incVal(){
        let time = new Date().toLocaleTimeString();
        setTime(time)
        
        // console.log(time)
        
    }
  return (
    <>
        <div className="container">
        <h1>
          {time1}
        </h1>
        <button className="btn btn-success" onClick={incVal} style={{ margin: "20px" }}>Click</button>
        </div>
    </>
  )
}

export default Hooks2Time