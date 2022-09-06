import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import './hm.css'
const Homepage = () => {
  const {id} = useParams("")

  const navigate = useNavigate()
  const [getuser,setGetuser] = useState([])
  
  const getData = async(e) => {
    const email2 = JSON.parse(localStorage.getItem('email2')) 
    await axios.get(`http://localhost:8000/showApi/${id}`).then(res=>{
      setGetuser(res.data.showData)
      console.log(getuser)
      // e.preventDefault()
    })
  }                     
  const back =()=>{
    navigate('/crud')
  }

  // getData()
  useEffect(() => {
    getData()
  },[])
  
  // {console.log(getuser)}
  return (
    <>
    {/* {console.log(getuser)} */}
    {/* <button onClick={getData}>get</button> */}
     <div className='head mt-3'>
     <h2 className='heading'>Hii, This Is Your Profile Page</h2>
     </div>
      <div class="card mt-4">
        <img src="" alt="Profile" style={{ width: '100%' }} />
        {
          getuser.map((ele,id)=>{
            return (
              <>
              <h1 style={{color:'black'}}>{ele.fname}</h1>
      <p className="title">{ele.lname}</p>
      <p className='mt-3'>Email : {ele.email}</p>
      <a href="/"><i class="fa fa-dribbble"></i></a>
      <a href="/"><i class="fa fa-twitter"></i></a>
      <a href="/"><i class="fa fa-linkedin"></i></a>
      <a href="/"><i class="fa fa-facebook"></i></a>
            </>
            )
          })
        }
        <p className='mt-3'><button>Contact</button>
        </p>
        <p className='mt-3'><button onClick={back}>Back</button></p>
      </div>
     
    </>
  )
}

export default Homepage