const express = require('express')
const mongoose = require('mongoose')
const validator = require('validator')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded())


const port = process.env.PORT || 8000

mongoose.connect("mongodb://127.0.0.1:27017/signup").then(()=>{
    console.log("connected")
}).catch((e)=>{
    console.log(e)
})

const signupSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3,
        maxLength:20
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    password:{
        type:String,
        required:true,
    },
    rePassword:{
        type:String,
        required:true,
    }
})

const User = new mongoose.model("User",signupSchema)

app.post("/register",(req,res)=>{

    const {name ,email , password , rePassword} = req.body;
    User.findOne({email:email},(_err,user1) => {
        if(user1){
            res.send("user Already Exist")
        }else{
            const user1 = new User({
                name,
                email,
                password,
                rePassword
            })
            user1.save().then(()=>{
                res.status(201).send("Created SuccessFully")
            }).catch((_e)=>{
                res.status(500).send("Server Error")
            })
        }
    })

        
    })

app.post("/login",(req,res)=>{
    // res.end("hii from backend")
    const {email, password} = req.body
    User.findOne({email:email},(err,user) => {
        if(user){
            if(password===user.password){
                res.send({message:"successfully login" ,user:user})
            }else{
                res.send({message:"Password didnt match"})
            }
        }else{
            res.send({message:"You Are Not Registerd"})
        }
    })
})

app.listen(port,()=>{
    console.log("listen")
})