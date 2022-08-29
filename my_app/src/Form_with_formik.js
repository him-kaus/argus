import React from 'react'
import { useFormik } from 'formik'
import { signUpSchema } from './schemas'
// import { Details } from '@mui/icons-material'


const initialValues = {
    name:'',
    email:'',
    password:'',
    confirm_pass:''
}

const Form_with_formik = () => {

    const localStorage1 = () => {
        const data = localStorage.getItem('Details')
        // console.log(data)
        if(data){
            return JSON.parse(data)
        }else{
            return ([])
        }
    }


    const { values, errors, handleChange, touched ,handleBlur,handleSubmit } = useFormik({
        initialValues,
        validationSchema:signUpSchema,
        
        onSubmit:(value,action)=>{
            
            console.log(value)
            localStorage.setItem("Details",JSON.stringify(value))
            action.resetForm() 
        }
    })
    
localStorage1();

    return (
        <>
            <section class="vh-100" style={{ backgroundColor: '#eee' }}>
                <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-lg-12 col-xl-11">
                            <div class="card text-black" style={{ borderRadius: '25px' }}>
                                <div class="card-body p-md-5">
                                    <div class="row justify-content-center">
                                        <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                            <form class="mx-1 mx-md-4">

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" class="form-control" value={values.name} name='name' onChange={handleChange} autoComplete='off' onBlur={handleBlur} />
                                                        <label class="form-label" for="form3Example1c">Your Name</label>
                                                        {errors.name && touched.name? <p style={{color:'red'}} className='form-error'>{errors.name}</p>:null}
                                                    </div>
                                                    
                                                </div>
                                                
                                                

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="email" id="form3Example3c" class="form-control" value={values.email} name='email' onChange={handleChange} autoComplete='off' onBlur={handleBlur} />
                                                        <label class="form-label" for="form3Example3c">Your Email</label>
                                                        {errors.email && touched.email ? <p style={{color:'red'}} className='form-error'>{errors.email}</p>:null}
                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4c" class="form-control" value={values.password} name='password' onChange={handleChange} autoComplete='off' onBlur={handleBlur} />
                                                        <label class="form-label" for="form3Example4c">Password</label>
                                                        {errors.password && touched.password ? <p style={{color:'red'}} className='form-error'>{errors.password}</p>:null}
                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4cd" class="form-control" value={values.confirm_pass} name='confirm_pass' onChange={handleChange} autoComplete='off' onBlur={handleBlur} />
                                                        <label class="form-label" for="form3Example4cd">Repeat your password</label>
                                                        {errors.confirm_pass && touched.confirm_pass ? <p style={{color:'red'}} className='form-error'>{errors.confirm_pass}</p>:null}
                                                    </div>
                                                </div>

                                                <div class="form-check d-flex justify-content-center mb-5">
                                                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                    <label class="form-check-label" for="form2Example3">
                                                        I agree all statements in <a href="#!">Terms of service</a>
                                                    </label>
                                                </div>

                                                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="button" onClick={handleSubmit} class="btn btn-primary btn-lg">Register</button>
                                                </div>

                                            </form>

                                        </div>
                                        <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                class="img-fluid" alt="Sample image" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Form_with_formik