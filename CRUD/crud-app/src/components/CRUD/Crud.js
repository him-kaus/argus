import React, { useState} from 'react'
import './style.css'
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Tooltip from '@mui/material/Tooltip';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';


const Crud = () => {
    const [toggle,setToggle] = useState(false)
    const [user2,setUser2] = useState({
        fname:"",
        lname:"",
        email:""
    })

    const handle = (e) => {
        const {name,value} = e.target;
        setUser2({
            ...user2,
            [name] : value
        })
    }

    const addItem = () =>{
        console.log("Add")
    }
    const edititem = () =>{
        console.log("Add")
    }
    const deletedItem = () =>{
        console.log("Add")
    }
    const clearAll = () => {
        console.log("clear all")
    }
    return (
        <>
        
            <div className='whole'>
                <div className='container'>
                    <h1 id='h11'>CRUD - List</h1>

                </div>
                <div className="cont2">
                    <input type="text" placeholder='✋ Write Your First Name' className='inp' name='fname' value={user2.fname} onChange={handle} />
                    <Input type="text" placeholder='✋ Write Your Last Name' className='inp' name='lname' value={user2.lname} onChange={handle}/>
                    <Input type='email' placeholder='✋ Write Your Email' className='inp' name='email' value={user2.email} onChange={handle}/>
                    <p></p>

                    <div>{toggle ? (<Tooltip title='Edit'><i className="fa111 fa11 fa1 far fa-edit" onClick={addItem}></i></Tooltip>) :
                        <span data-testid='btn12' className='plus'><Tooltip title='Add'><AddCircleOutlinedIcon onClick={addItem} /></Tooltip></span>}</div>

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
                        {/* <tbody>
                            {user2.map((curEle, index) => {
                                return (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{curEle.name1}</td>
                                        <td>{curEle.name2}</td>
                                        <td>{curEle.email}</td>
                                        <td><i class="fa11 fa fa-edit" onClick={() => edititem(curEle.id)}></i></td>
                                        <td><i class="fa12 fa fa-trash" onClick={() => deletedItem(curEle.id)}></i></td>
                                    </tr>

                                )
                            })}
                        </tbody> */}
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