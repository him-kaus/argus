import React, { useState, useEffect } from 'react'
import './style.css'
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Tooltip from '@mui/material/Tooltip';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';


const Todo = () => {


    //GET ITEMS FROM LOCALSTORAGE
    const localStorage1 = () => {
        const list = localStorage.getItem("todoList")
        if (list) {
            return JSON.parse(list)
        } else {
            return ([])
        }
    }

    const [allEntry, setAllEntry] = useState(localStorage1())


    const [inpData, setInpData] = useState('')
    const [inpName, setInpName] = useState('')
    const [inpEmail, setInpEmail] = useState('')

    const [isData, setIsData] = useState('')
    const [toggle, setToggle] = useState(false)
    let error = 0;

    // const dataFunc = (event) => {
    //     const value = event.target.value
    //     const name = event.target.name

    //     setAllEntry((preValue) => {

    //         return {
    //             ...preValue,
    //             [name] : value,
    //         }}
    //     // setInpName(e.target.value)
    // )}

    // Email Validation

    const handle1 = (email) => {
        let err = /\S+@\S+\.\S+/.test(email)
        console.log(err)
        return (
            /\S+@\S+\.\S+/.test(email)
        )
    }

    //ADD ITEM
    const addItem = () => {

        if (!inpData || !inpName || !inpEmail) {

            if (!inpData) {
                alert("Please Enter A Valid Name")
            } else {
                if (!inpName) {
                    alert("Please Enter A Valid Last Name")

                } else {
                    alert("Please Enter A Valid Email")
                }
            }
        }
        else if (error === 0) {
            // console.log(inpEmail)
            if (handle1(inpEmail) !== true) {
                // setError("Email Is Invalid")
                alert("Enter A Valid Email")
                setInpEmail('')
            } else {
                if (toggle) {

                    setAllEntry(
                        allEntry.map((curelem) => {
                            if (curelem.id === isData) {
                                return { ...curelem, name1: inpData, name2: inpName, email: inpEmail }
                            } else {
                                return (curelem)
                            }
                        })
                    )
                    setInpData('')
                    setInpName("")
                    setInpEmail("")
                    setToggle(false)
                }

                else {
                    const myInputData = {
                        id: new Date().getTime().toString(),
                        name1: inpData,
                        name2: inpName,
                        email: inpEmail
                    }
                    localStorage.setItem("todoList", JSON.stringify(allEntry))
                    setAllEntry([...allEntry, myInputData])

                    setInpData("")
                    setInpName("")
                    setInpEmail("")
                }


            }
        }


    }

    // DELETE ITEM
    const deletedItem = (index) => {
        const updatedItems = allEntry.filter((curElem) => {
            return (
                curElem.id !== index
            )
        })
        setAllEntry(updatedItems)
        setInpData('')
        setInpName("")
        setInpEmail('')
    }


    //EDIT ITEM
    const edititem = (index) => {
        const editItem = allEntry.find((curElem) => {
            return (
                curElem.id === index
            )

        })
        setInpData(editItem.name1)
        setInpName(editItem.name2)
        setInpEmail(editItem.email)
        setIsData(index)
        setToggle(true)
    }

    // CLEAR ALL FUNCTION
    const clearAll = () => {
        setAllEntry([])
    }

    //SET ITEM ON LOCALSTORAGE
    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(allEntry))
    }, [allEntry])


    return (
        <>
        
            <div className='whole'>
                <div className='container'>
                    <h1 id='h11'>CRUD - List</h1>

                </div>
                <div className="cont2">
                    <Input type="text" placeholder='✋ Write Your First Name' name='inpData' onChange={e => setInpData(e.target.value)} value={inpData} className='inp' />
                    <Input type="text" placeholder='✋ Write Your Last Name' name='inpName' onChange={e => setInpName(e.target.value)} value={inpName} className='inp' />
                    <Input type='email' placeholder='✋ Write Your Email' name='inpEmail' onChange={e => setInpEmail(e.target.value)} value={inpEmail} className='inp' />
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
                        <tbody>
                            {allEntry.map((curEle, index) => {
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
                        </tbody>
                    </table>


                </div>
                <div className='btnUp'>
                    {/* <button className='btn effect04' dataText="Check List" dataTextHover="Remove all" onClick={clearAll}><span></span></button> */}
                    <Button variant='outlined' className='btn effect04' onClick={clearAll}>Remove All</Button>
                </div>
            </div>
        </>
    )
}

export default Todo
