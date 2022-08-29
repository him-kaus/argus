import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

const Form = () => {
    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
        email: ""
    });


    const inputEvent = (event) => {
        // setName1(event.target.value)
        const value = event.target.value
        const name = event.target.name

        setFullName((preValue) => {

            return {
                ...preValue,
                [name] : value,
            }

            // if (name === 'fName') {
            //     return {
            //         fname: value,
            //         lname: preValue.lname,
            //         email: preValue.email
            //     }
            // }
            // else if (name === 'lName') {
            //     return {
            //         fname: preValue.fname,
            //         lname: value,
            //         email: preValue.email
            //     }
            // }
            // else if (name === 'Email') {
            //     return {
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: value
            //     }
            // }
        }
        )
    }


    const onSubmit = (e) => {
        e.preventDefault()
        // fullName.fname=""
        alert("form submitted")
    }
    return (


        <>
            <form onSubmit={onSubmit}>
                <div style={{ textAlign: "center", margin: "20px 20px" }}>
                    <h1>Hello {fullName.fname} {fullName.lname}</h1><br />
                    <p>Email : {fullName.email}</p>
                    <Input 
                        type="text"
                        placeholder="Enter Your Name"
                        name='fname'
                        onChange={inputEvent}
                        value={fullName.fname}
                    />
                    
                    
                    <br /><br />
                    <Input
                        type="text"
                        placeholder="Enter Your LastName"
                        name='lname'
                        onChange={inputEvent}
                        value={fullName.lname}
                    /><br /><br />

                    <Input
                        type="email"
                        placeholder="Enter Your LastName"
                        name='email'
                        onChange={inputEvent}
                        value={fullName.email}
                    /> <br /><br />
                    <AddIcon />
                    <button>Submit</button>
                    <Button>Submit</Button>
                </div>

            </form>
        </>
    )
}

export default Form