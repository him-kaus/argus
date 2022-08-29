const mongoose = require('mongoose')
const validator = require('validator')

const studentSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        minLength:3,
        maxLength:20,
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
    phone:{
        type:Number,
        unique:true,
        min:10,

    },
    address:{
        type:String,
        required:true
    }
})

const Student = new mongoose.model("Student",studentSchema)

module.exports = Student;