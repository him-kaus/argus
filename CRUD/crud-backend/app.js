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

//NEW SCHEMA FOR SIGNUP FORM
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

//SECOND SCHEMA FOR CRUD ENTRIES

const crudSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        minLength:3,
        maxLength:20
    },
    lname:{
        type:String,
        required:true,
        minLength:3,
        maxLength:20
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
})

const Crud = new mongoose.model("Crud",crudSchema)



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

app.post("/additem",(req,res)=>{
    const {fname,lname,email} = req.body;
    const crudDetails = new Crud({
        fname,
        lname,
        email
    })
    crudDetails.save().then(()=>{
        res.status(201).send("Successfully saved")
    }).catch((_e)=>{
        res.status(500).send("Server Error 2")
    })
})

app.get('/api',async(req,res)=>{
    try{
        const data = await Crud.find()
        res.send({message:"done",data:data})
    }catch(e){
        console.log(e)
    }
})

app.delete("/deleteApi/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const deleteData = await Crud.findByIdAndRemove(_id)
        if(!deleteData){
            return res.status(404).send("page not found")
        }else{
            return res.status(200).send({message:"deleted",deleteData:deleteData})
        }
    }catch(e){
        res.status(500).send(e)
    }
})

app.get("/showApi/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const showData = await Crud.findById(_id)
        if(!showData){
            return res.status(404).json("DataBase Is Empty")
        }else{
            return res.status(200).json({message:"successfully show",showData:showData})
        }
    }catch(e){
        res.status(500).json("Internal Servar Error")
    }
})

app.listen(port,()=>{
    console.log("listen")
})