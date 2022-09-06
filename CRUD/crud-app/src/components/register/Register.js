import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { signUpSchema } from '../schemas/signUpSchema'
import './register.css'


const initialValues = {
  name:'',
  email:'',
  password:'',
  rePassword:''
}

const Register = () => {
  const navigate = useNavigate()

  // const [user,setUser] =  useState({
  //   name:"",
  //   email:"",
  //   password:"",
  //   rePassword:""
  // })

  // const handle = (e) => {
  //   const {name,value} = e.target
  //   setUser({
  //     ...user,
  //     [name] : value
  //   })
  // }


  const register = (value) => {
    const {name,email,password,rePassword} = value

    if(name&&email&&password&&password===rePassword){
      axios.post("http://localhost:8000/register",value)
    }else{
      alert("Invalid Entries")
    }
    navigate('/login')

  }

  const { values, errors, handleChange, touched ,handleBlur,handleSubmit } = useFormik({
    initialValues,
    validationSchema:signUpSchema,
    
    onSubmit:(value,action)=>{
        
        console.log(JSON.stringify(value))
        register(value)
        localStorage.setItem("Details",JSON.stringify(value))
        action.resetForm() 
    }
})


  
  return (
    <>
<div class="main-w3layouts wrapper">
		<h1>Teacher Registration Form</h1>
		<div class="main-agileinfo">
			<div class="agileits-top">
				<form action="#" method="post">
					<input class="text" type="text" value={values.name} name='name' onChange={handleChange} autoComplete='off' onBlur={handleBlur} placeholder="Username" />
          {errors.name && touched.name? <p style={{color:'red'}} className='form-error'>{errors.name}</p>:null}
					<input class="text email" type="email" value={values.email} name='email' onChange={handleChange} autoComplete='off' onBlur={handleBlur} placeholder="Email" /> 
          {errors.email && touched.email ? <p style={{color:'red'}} className='form-error'>{errors.email}</p>:null}
					<input class="text" type="password" value={values.password} name='password' onChange={handleChange} autoComplete='off' onBlur={handleBlur} placeholder="Password" required="" />
          {errors.password && touched.password ? <p style={{color:'red'}} className='form-error'>{errors.password}</p>:null}
					<input class="text w3lpass" type="password" value={values.rePassword} name='rePassword' onChange={handleChange} autoComplete='off' onBlur={handleBlur} placeholder="Confirm Password" required="" />
          {errors.rePassword && touched.rePassword ? <p style={{color:'red'}} className='form-error'>{errors.rePassword}</p>:null}
					<div class="wthree-text">
						<label class="anim">
							<input type="checkbox" class="checkbox" required="" />
							<span>I Agree To The Terms & Conditions</span>
						</label>
						<div class="clear"> </div>
					</div>
					<input type="submit" onClick={handleSubmit} value="SIGNUP" />
				</form>
				<p>Already have an Account? <a href="/login"> Login Now!</a></p>
			</div>
		</div>
		
		<div class="colorlibcopy-agile">
			<p>© 2018 Colorlib Signup Form. All rights reserved | Design by <a href="https://colorlib.com/" target="_blank">Colorlib</a></p>
		</div>
		
		<ul class="colorlib-bubbles">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</div>



{/* <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 pp">

<p className="pp text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

<form className="mx-1 mx-md-4 pp">

  <div className="d-flex flex-row align-items-center mb-4">
    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
    <div className="form-outline flex-fill mb-0">
      <input type="text" id="form3Example3c" className="form-control" name='name' value={user.name} onChange={handle}/>
      <label className="form-label" for="form3Example3c">Your Name</label>
    </div>
  </div>

  <div className="d-flex flex-row align-items-center mb-4">
    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
    <div className="form-outline flex-fill mb-0">
      <input type="email" id="form3Example3c" className="form-control" name='email' value={user.email} onChange={handle}/>
      <label className="form-label" for="form3Example3c">Your Email</label>
    </div>
  </div>

  <div className="d-flex flex-row align-items-center mb-4">
    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
    <div className="form-outline flex-fill mb-0">
      <input type="password" id="form3Example4c" className="form-control" name='password' value={user.password} onChange={handle}/>
      <label className="form-label" for="form3Example4c">Password</label>
    </div>
  </div>

  <div className="d-flex flex-row align-items-center mb-4">
    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
    <div className="form-outline flex-fill mb-0">
      <input type="password" id="form3Example4cd" className="form-control" name='rePassword' value={user.rePassword} onChange={handle}/>
      <label className="form-label" for="form3Example4cd">Repeat your password</label>
    </div>
  </div>

  <div className="form-check d-flex justify-content-center mb-5">
    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
    <label className="form-check-label" for="form2Example3">
      I agree all statements in <a href="#!">Terms of service</a>
    </label>
  </div>

  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
    <button type="button" className="btn btn-primary btn-lg" onClick={register}>Register</button>
  </div>

</form>

</div>
<div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

<img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
  className="img-fluid" alt="Sample image" />

</div> */}
        {/* <section className="vh-100" style={{backgroundColor: '#eee'}}>
  <div className="container h-100 ">
    <div className="pp row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black " style={{borderRadius: "25px"}}>
          <div className="card-body p-md-5 pp">
            <div className="row justify-content-center">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}
    </>
  )
}

export default Register