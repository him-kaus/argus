import axios from 'axios'
import React, { useState,useEffect } from 'react'
// import axios from 'axios'

const Axios_Api = () => {
    const [num,setNum] = useState()
    const [name1,setName1] = useState()
    const [moves,setMoves] = useState()

    useEffect(() => {
      async function getData(){
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
        // console.log(res.data.name)
        setName1(res.data.name)
        setMoves(res.data.moves.length)
      }
      getData()
    })
    
    
  return (
    <>
    <h1>I Selected {num}</h1>
    <h1>My Name Is <span style={{color:"red"}}>{name1}</span></h1>
    <h1>My Moves Is <span style={{color:"red"}}>{moves}</span></h1>
        <select value={num} onChange={(e) => setNum(e.target.value)}>
            <option value='1'>1</option>
            <option value='25'>25</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
        </select>
    </>
  )
}

export default Axios_Api

// https://pokeapi.co/api/v2/pokemon/1/