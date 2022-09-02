const express = require('express')
const mongoose = require('mongoose')
const validator = require('validator')
const authenticate = require('./middleware/Authenticate')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded())


const port = process.env.PORT || 8000

dotenv.config({path:'./config.env'})

mongoose.connect("mongodb://127.0.0.1:27017/signup").then(() => {
    console.log("connected")
}).catch((e) => {
    console.log(e)
})

//NEW SCHEMA FOR SIGNUP FORM
const signupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }
    },
    password: {
        type: String,
        required: true,
    },
    rePassword: {
        type: String,
        required: true,
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})

signupSchema.methods.generateToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, `${process.env.SECRET_KEY}`)
        this.tokens = this.tokens.concat({ token: token })
        await this.save()
        return token;
    } catch (e) {
        console.log(e)
    }
}

const User = new mongoose.model("User", signupSchema)


//SECOND SCHEMA FOR CRUD ENTRIES

const crudSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
    },
    fname: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20
    },
    lname: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
})

const Crud = new mongoose.model("Crud", crudSchema)



app.post("/register", (req, res) => {

    const { name, email, password, rePassword } = req.body;
    User.findOne({ email: email }, (_err, user1) => {
        if (user1) {
            res.send("user Already Exist")
        } else {
            const user1 = new User({
                name: name,
                email,
                password,
                rePassword
            })
            user1.save().then(() => {
                res.status(201).send("Created SuccessFully")
            }).catch((_e) => {
                res.status(500).send("Server Error")
            })
        }
    })


})

app.post("/login", async (req, res) => {
    // res.end("hii from backend")

    try{
        let token;
        const { email, password } = req.body
    const userLogin = await User.findOne({ email: email })
    if (userLogin) {
        token = await userLogin.generateToken()
        console.log(token)
        res.cookie("jwtoken",token,{
            expires:new Date(Date.now()+2389200000),
            httpOnly:true
        })
        if (password === userLogin.password) {
            res.send({ message: "successfully login", user: userLogin })
        } else {
            res.send({ message: "Password didnt match" })
        }

    }
    }catch(e){
        res.status(500).send(e)
    }
    // User.findOne({email:email},async(_err,user) => {
    //     let token;
    //     if(user){
    //         if(password===user.password){
    //             token = await User.generateToken();
    //             res.send({message:"successfully login" ,user:user})
    //         }else{
    //             res.send({message:"Password didnt match"})
    //         }
    //     }else{
    //         res.send({message:"You Are Not Registerd"})
    //     }
    // })
})

app.post("/additem", (req, res) => {
    const { fname, lname, email } = req.body;
    const crudDetails = new Crud({
        fname,
        lname,
        email
    })
    crudDetails.save().then(() => {
        res.status(201).send("Successfully saved")
    }).catch((_e) => {
        res.status(500).send("Server Error 2")
    })
})

app.get('/api', async (req, res) => {
    try {
        const data = await Crud.find()
        res.send({ message: "done", data: data })
    } catch (e) {
        console.log(e)
    }
})

app.delete("/deleteApi/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteData = await Crud.findByIdAndRemove(_id)
        if (!deleteData) {
            return res.status(404).send("page not found")
        } else {
            return res.status(200).send({ message: "deleted", deleteData: deleteData })
        }
    } catch (e) {
        res.status(500).send(e)
    }
})

app.get("/showApi/:id", authenticate ,async (req, res) => {
    const _id = req.params.id;
    const showData = await Crud.findById(_id)
    console.log(showData)
    try {
        if (!showData) {
            return res.status(404).json("DataBase Is Empty")
        } else {
            return res.status(200).json({ message: "successfully show", showData: [showData] })
        }
    } catch (e) {
        res.status(500).json("Internal Servar Error")
    }
})

app.patch("/updateApi/:id", async (req, res) => {
    const _id = req.params.id;

    const updatedUser = await Crud.findByIdAndUpdate(_id, req.body, {
        new: true
    })
    try {

        if (!updatedUser) {
            return res.status(404).json("database is empty")
        } else {
            return res.status(200).json({ message: "success22", data: updatedUser })
        }
    } catch (e) {
        res.status(500).json("server error")
    }
})

app.listen(port, () => {
    console.log("listen")
})