import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Error from './Error'
import './signup.css'

const SignUp = () => {
    var navigate = useNavigate()

    const localStorage1 = () => {
        let LData = localStorage.getItem('Data')
        // var PData = JSON.parse(LData)

        if (LData) {
            return JSON.parse(LData)
        } else {
            return []
        }

    }

    const [allEntry, setAllEntry] = useState(localStorage1())
    const [allEmail, setAllEmail] = useState([])

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')

    const btnClick = (e) => {
        e.preventDefault()
        if (fname) {
            {
                const myData = {
                    fname: fname,
                    lname: lname,
                    email: email,
                    password:password
                }
                // localStorage.setItem("Email", JSON.stringify(email))
                // setAllEmail([...allEmail, email])
                setAllEntry([...allEntry, myData])
                setFname('')
                setLname('')
                setEmail('')
                setPassword('')


            }
        }
    }
    useEffect(() => {
        localStorage.setItem("Data", JSON.stringify(allEntry))
    }, [allEntry])

    return (
        <>
            <section class="vh-100 gradient-custom">
                <div class="container py-5 h-100">
                    <div class="row justify-content-center align-items-center h-100">
                        <div class="col-12 col-lg-9 col-xl-7">
                            <div class="card shadow-2-strong card-registration" style={{ borderRadius: '15px;' }}>
                                <div class="card-body p-4 p-md-5">
                                    <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                                    <form onSubmit={btnClick}>

                                        <div class="row">
                                            <div class="col-md-6 mb-4">

                                                <div class="form-outline">
                                                    <input type="text" id="firstName" class="form-control form-control-lg" onChange={(e) => setFname(e.target.value)} value={fname} />
                                                    <label class="form-label" for="firstName">First Name</label>
                                                </div>

                                            </div>
                                            <div class="col-md-6 mb-4">

                                                <div class="form-outline">
                                                    <input type="text" id="lastName" class="form-control form-control-lg" onChange={(e) => setLname(e.target.value)} value={lname} />
                                                    <label class="form-label" for="lastName">Last Name</label>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="row">
                                            {/* <div class="col-md-6 mb-4 d-flex align-items-center">

                  <div class="form-outline datepicker w-100">
                    <input type="text" class="form-control form-control-lg" id="birthdayDate" />
                    <label for="birthdayDate" class="form-label">Birthday</label>
                  </div>

                </div> */}
                                            {/* <div class="col-md-6 mb-4">

                  <h6 class="mb-2 pb-1">Gender: </h6>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="option1" checked />
                    <label class="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="option2" />
                    <label class="form-check-label" for="maleGender">Male</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                      value="option3" />
                    <label class="form-check-label" for="otherGender">Other</label>
                  </div>

                </div> */}
                                        </div>

                                        <div class="row">
                                            <div class="col-md-6 mb-4 pb-2">

                                                <div class="form-outline">
                                                    <input type="email" id="emailAddress" class="form-control form-control-lg" onChange={(e) => setEmail(e.target.value)} value={email} />
                                                    <label class="form-label" for="emailAddress">Email</label>
                                                </div>

                                            </div>
                                            <div class="col-md-6 mb-4 pb-2">

                                                <div class="form-outline">
                                                    <input type="password" id="phoneNumber" class="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)} value={password} />
                                                    <label class="form-label" for="password">Password</label>
                                                </div>

                                            </div>
                                        </div>

                                        {/* <div class="row">
                <div class="col-12">

                  <select class="select form-control-lg">
                    <option value="1" disabled>Choose option</option>
                    <option value="2">Subject 1</option>
                    <option value="3">Subject 2</option>
                    <option value="4">Subject 3</option>
                  </select>
                  <label class="form-label select-label">Choose option</label>

                </div>
              </div> */}

                                        <div class="mt-4 pt-2">
                                            <input class="btn btn-primary btn-lg" type="submit" value="Signup" />
                                        </div>
                                        <div class="mt-4 pt-2 ">
                                            <input class="btn btn-primary btn-lg" type="submit" value="Login" onClick={() => navigate('/')} />
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default SignUp