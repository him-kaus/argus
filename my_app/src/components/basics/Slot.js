import React from 'react'
import './slot.css'
const Slot1 = (props) =>{
  // let x = '😄'
  // let y = '😄'
  // let z = '😄'

  let x = props.x
  let y = props.y
  let z = props.z

  if((x===y) && (y===z)){
    return (
      <>
        <h1>{x} {y} {z}</h1>
        <h1 className='result'>
          All Are Matching.
        </h1>
      </>
    )
  }else if((x===y)&&(y!==z)){
    return(
      <>
        <h1>{x} {y} {z}</h1>
        <h1 className='result'>
          Not Matching.
        </h1>
      </>
    )
  }
  else{
    return(
      <>
        <h1>{x} {y} {z}</h1>
        <h1 className='result'>
          Not Matching.
        </h1>
      </>
    )
  }
}

const Slot = () => {
  return (
    <>
      <h1 className='heading'>Slot Machine</h1>
      <div className='container'>
        <Slot1 x = '😄' y = '😄' z = '😄'/>
        
      </div>
      <div className='container'>
        <Slot1 x='😄' y='😄' z='🐼'/>
        
      </div>
      <div className='container'>
        <Slot1 x='😄' y='🔄' z='🐼'/>
        
      </div>
    </>
  )
}

export default Slot