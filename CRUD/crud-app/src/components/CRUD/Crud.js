import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate, useParams } from "react-router-dom";
import './style.css'
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import axios from 'axios';
import Header from '../Header';


const Crud = ({setLogin}) => {
    const { id } = useParams("")

    const [error,setError] = useState('')
    const navigate = useNavigate()

    const [getuserdata, setUserdata] = useState([])

    const [toggle, setToggle] = useState(false)
    const [user2, setUser2] = useState({
        userId: "",
        fname: "",
        lname: "",
        email: "",
        mobile:""
    })

    const handle = (e) => {
        const { name, value } = e.target;
        setUser2({
            ...user2,
            [name]: value
        })
    }

    const getItem = async() => {
        const email = JSON.parse(localStorage.getItem('email2'))
        if(!email){
            navigate('/login')
        }else{
            // setLogin(false)
            await axios.get(`http://localhost:8000/api/${email}`).then(res => {
            setUserdata(res.data.data)
        })
        }
    }

    const addItem = () => {
        const { fname, lname, email,mobile} = user2

        const emailFromLocalStorage = JSON.parse(localStorage.getItem('email2'))
        console.log(typeof(emailFromLocalStorage))
        console.log(typeof(user2.email))
        if(emailFromLocalStorage!==user2.email){
            setError("Email Didn't Match With Teacher's ID")
        }else{
            if (fname && lname && email&&mobile) {
                axios.post("http://localhost:8000/additem", user2).then(res => console.log(res))
            } else {
                alert("Invalid Entries")
            }
    
            setUser2({
                userId: '',
                fname: '',
                lname: '',
                email: '',
                mobile:''
            })
            setError("")
            getItem()
        }
    }
    const editItem = (id) => {
        console.log("Add")
        axios.get(`http://localhost:8000/showApi/${id}`).then(res => {
            console.log(res.data.showData[0].fname)
            setUser2({
                fname: res.data.showData[0].fname,
                lname: res.data.showData[0].lname,
                email: res.data.showData[0].email,
                mobile:res.data.showData[0].mobile
                
            })
            setToggle(true)
        })
    }


    const deleteItem = (id) => {
        // console.log("Add")
        axios.delete(`http://localhost:8000/deleteApi/${id}`).then(res => {
            // console.log(res.data.deleteData._id)
            getItem()
        })
    }


    const showData = (id) => {
        navigate('/home')
    }


    useEffect(() => {
        getItem()
    },[])

    const editActually = async (e) => {
        const { fname, lname, email,mobile } = user2
        if (fname && lname && email&&mobile) {
            await axios.patch(`http://localhost:8000/updateApi/${id}`, user2).then(res => console.log(res.data))
        } else {
            alert("Invalid Entries")
        }

        setUser2({
            fname: "",
            lname: "",
            email: "",
            mobile:''
        })
        setToggle(false)
        getItem()
        navigate('/crud')
    }

    return (
        <>
            <Header />
            <div className='whole'>
                <div className='container'>
                    <h1 id='h11' data-testid='text'>Students - List</h1>

                </div>
                <div className="cont2 mt-3">
                    <Input type="text" placeholder='✋ Write Student First Name' name='fname' value={user2.fname} onChange={handle} /><br />
                    <Input type="text" placeholder='✋ Write Student Last Name' name='lname' value={user2.lname} onChange={handle} /><br />
                    <Input type="text" placeholder='✋ Write Student Mobile No.' name='mobile' value={user2.mobile} onChange={handle} /><br />
                    <Input type='text' placeholder='✋ Confirm Teacher ID' name='email' value={user2.email} onChange={handle} />
                    {error ? <p style={{color:'red'}} className='form-error'>{error}</p>:null}

                    {/* <div>{toggle ? (<Tooltip title='Edit'><i className="fa111 fa11 fa1 far fa-edit" onClick={addItem}></i></Tooltip>) :
                        <span data-testid='btn12' className='plus'><Tooltip title='Add'><AddCircleOutlinedIcon onClick={addItem} /></Tooltip></span>}</div> */}

                    <div className='mt-3'>
                        {
                            toggle ? <button className='btn btn-primary' onClick={editActually} style={{ width: '70px' }}>Edit</button> : <button className='btn btn-success' style={{ width: '70px' }} onClick={addItem}>Add</button>
                        }
                    </div>

                    {/* //SHOW THE LIST  */}
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Mobile</th>
                                {/* <th scope="col">Teacher ID</th> */}
                            </tr>
                        </thead>
                        <tbody>

                            {
                                getuserdata.map((ele, index) => {
                                    return (

                                        <>
                                            <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td>{ele.fname}</td>
                                                {/* <td>{ele._id}</td> */}
                                                <td>{ele.lname}</td>
                                                <td>{ele.mobile}</td>
                                                <td><NavLink to={`home/${ele._id}`}><button className='btn btn-primary' onClick={showData}>Show</button></NavLink></td>
                                                {
                                                    !toggle ? <td><NavLink to={`${ele._id}`}><button className='btn btn-success' onClick={() => editItem(ele._id)}>Edit</button></NavLink></td> : null
                                                }

                                                <td><button className='btn btn-danger' onClick={() => deleteItem(ele._id)}>Delete</button></td>
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