const express = require('express');
const Student = require('./models/student');
const app = express();

require('./db/conn')
const studnet = require('./models/student')

const port = process.env.PORT || 8000

app.use(express.json())

app.post("/student",(req,res)=>{
    const user = new studnet(req.body)
    user.save().then(()=>{
        res.status(201).send(user)
    }).catch((e)=>{
        res.status(400).send(e)
    })
    // console.log(user)
})


//GET ALL DATA BY FIND METHOD

app.get("/student",async(_req,res)=>{
    try{
        const stData = await Student.find();
        res.send(stData)
    }catch(e){
        res.send(e)
    }
})

//GET STUDENT DATA USING ID ONLY SINGLE DATA

app.get("/student/:name",async(req,res)=>{
    try{
        const name = req.params.name;
        // res.send(name)
        const stuDataOne = await Student.findOne({name});
        // console.log(stuDataOne)
        if(!stuDataOne){
            res.status(404).send()
        }else{
            res.send(stuDataOne);
        }
        
    }catch(e){
        res.status(500).send(e)
    }
})


// GET STUDENT DATA USING NAME ONLY SINGLE DATA

app.get("/student/:name",async(req,res)=>{
    try{
        const name = req.params.name;
        // res.send(name)
        const stuDataOne = await Student.findOne({name});
        // console.log(stuDataOne)
        if(!stuDataOne){
            res.status(404).send()
        }else{
            res.send(stuDataOne);
        }
        
    }catch(e){
        res.status(500).send(e)
    }
})

app.listen(port,()=>{
    console.log("server is running")
})

