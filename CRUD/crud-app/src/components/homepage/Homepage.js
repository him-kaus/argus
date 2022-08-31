import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import './hm.css'
const Homepage = () => {
  const {id} = useParams("")
  const [getuser,setGetuser] = useState([])
  
  // const getData = async() => {
  //   try{
  //     axios.get(`http://localhost:8000/showApi/${id}`).then(function(res){
        
  //     })
  //   }catch(e){
  //     console.log("invalid")
  //   }
    
  // }

  const getData = async(e) => {
    // e.prevantDefaulter()
    const res = await fetch(`http://localhost:8000/showApi/${id}`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    });
    const data = await res.json()
    // console.log(data)
    if(!data){
      console.error("not found")
    }else{
      setGetuser(data)
      console.log("set")
    }
  }

  useEffect(() => {
    getData()
  })
  
  // {console.log(getuser)}
  return (
    <>
    {/* {console.log(getuser)} */}
    {/* <button onClick={getData}>get</button> */}
     <div className='head mt-3'>
     <h2 className='heading'>Hii, This Is Your Profile Page</h2>
     </div>
      <div class="card mt-4">
        <img src="img.jpg" alt="John" style={{ width: '100%' }} />
        {
          getuser.map((ele,id)=>{
            return (
              <>
              <h1>{id+1}</h1>
      <p class="title">CEO & Founder, Example</p>
      <p>Harvard University</p>
      <a href="/"><i class="fa fa-dribbble"></i></a>
      <a href="/"><i class="fa fa-twitter"></i></a>
      <a href="/"><i class="fa fa-linkedin"></i></a>
      <a href="/"><i class="fa fa-facebook"></i></a>
            </>
            )
          })
        }
        <p><button>Contact</button></p>
      </div>
     
    </>
  )
}

export default Homepage