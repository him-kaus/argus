const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/student").then(()=>{
    console.log("success")
}).catch((_e)=>{
    console.log("Not connected")
})