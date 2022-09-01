import React, { useState,useEffect } from 'react'
import { NavLink, useNavigate, useParams } from "react-router-dom";
import './style.css'
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Tooltip from '@mui/material/Tooltip';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import axios from 'axios';
import Homepage from '../homepage/Homepage';


const Crud = () => {
    const {id} = useParams("")
    const navigate = useNavigate()

    // const [showUser,setShowUser] = useState([])

    const [getuserdata,setUserdata] = useState([])

    const [toggle, setToggle] = useState(false)
    const [user2, setUser2] = useState({
        fname: "",
        lname: "",
        email: ""
    })

    const handle = (e) => {
        const { name, value } = e.target;
        setUser2({
            ...user2,
            [name]: value
        })
    }

    const addItem = () => {
        const { fname, lname, email } = user2
        if (fname && lname && email) {
            axios.post("http://localhost:8000/additem", user2).then(res => console.log(res))
        } else {
            alert("Invalid Entries")
        }
        getItem()
        setUser2({
            fname: '',
            lname: '',
            email: ''
        })
    }
    const editItem = (id) => {
        console.log("Add")
        axios.get(`http://localhost:8000/showApi/${id}`).then(res=>{
            setUser2({
                fname: res.data.showData.fname,
                lname:res.data.showData.lname,
                email:res.data.showData.email
            })
            setToggle(true)
        })
    }

    
    const deleteItem = (id) => {
        // console.log("Add")
        axios.delete(`http://localhost:8000/deleteApi/${id}`).then(res=>{
            // console.log(res.data.deleteData._id)
            getItem()
        })
    }
    const getItem = () => {
        axios.get("http://localhost:8000/api").then(res => {
            // console.log(res.showData)
           setUserdata(res.data.data)
        })
    }

    const showData = (id) => {
        // axios.get(`http://localhost:8000/showApi/${id}`).then(res=>{
        // const showuser = res.data.showData
        //   console.log(showuser)
        //   if(res.data._id){
        //     return (
        //         <>
        //             <Homepage showuser={showuser}/>
        //         </>
        //     )
        //   }
         
        // })
        navigate('/home')
      }


    useEffect(() => {
      getItem()
    }, [])

    const editActually = async(e) =>{
        const { fname, lname, email } = user2
        if (fname && lname && email) {
            await axios.patch(`http://localhost:8000/updateApi/${id}`, user2).then(res => console.log(res.data))
        } else {
            alert("Invalid Entries")
        }
        getItem()
    }
    
    return (
        <>

            <div className='whole'>
                <div className='container'>
                    <h1 id='h11'>CRUD - List</h1>

                </div>
                <div className="cont2">
                    <Input type="text" placeholder='✋ Write Your First Name' className='inp' name='fname' value={user2.fname} onChange={handle} />
                    <Input type="text" placeholder='✋ Write Your Last Name' className='inp' name='lname' value={user2.lname} onChange={handle} />
                    <Input type='email' placeholder='✋ Write Your Email' className='inp' name='email' value={user2.email} onChange={handle} />
                    <p></p>

                    {/* <div>{toggle ? (<Tooltip title='Edit'><i className="fa111 fa11 fa1 far fa-edit" onClick={addItem}></i></Tooltip>) :
                        <span data-testid='btn12' className='plus'><Tooltip title='Add'><AddCircleOutlinedIcon onClick={addItem} /></Tooltip></span>}</div> */}

                    <div>
                        {
                            toggle ? <button className='btn btn-primary' onClick={editActually} style={{width:'70px'}}>Edit</button> : <button className='btn btn-success' style={{width:'70px'}} onClick={addItem}>Add</button> 
                        }
                    </div>

                    {/* //SHOW THE LIST  */}
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {
                                getuserdata.map((ele,index)=>{
                                    return (

                                        <>
                                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{ele.fname}</td>
                                {/* <td>{ele._id}</td> */}
                                <td>{ele.lname}</td>
                                <td>{ele.email}</td>
                                <NavLink to={`home/${ele._id}`}><td><button className='btn btn-primary' onClick={showData}>Show</button></td></NavLink>
                                {
                                    !toggle ? <NavLink to={`${ele._id}`}><td><button className='btn btn-success' onClick={()=>editItem(ele._id)}>Edit</button></td></NavLink>:null
                                }
                                
                                <td><button className='btn btn-danger' onClick={()=>deleteItem(ele._id)}>Delete</button></td>
                            </tr>
                                        </>
                                    )
                                })
                            }

                        </tbody>
                    </table>


                </div>
                <div className='btnUp'>
                    {/* <button className='btn effect04' dataText="Check List" dataTextHover="Remove all" onClick={clearAll}><span></span></button> */}
                    <Button variant='outlined' className='btn effect04'>Remove All</Button>
                </div>
            </div>
        </>
    )
}

export default Crud