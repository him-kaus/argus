import React from 'react'
import {Route, Routes} from 'react-router-dom'
import CompA from './CompA'
import CompC from './CompC'
import Menu2 from './Menu2'
const Router1 = () => {
  const Name = () => {
    return(
      <h1>This Is Child Page</h1>
    )
  }
  return (
    <>  
    <Menu2 />
    <Routes>
      <Route exact path='/' element={<CompC />} />
      <Route path='/CompC/:name' element={<CompC name='himanshu'/>}/>
      <Route exact path='/CompA' element={<CompA />}/>
      <Route path='CompC/Name' element={<Name />}/>
    </Routes>
    </>
  )
}

export default Router1