const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect("mongodb://localhost:27017/newdata").then(()=>console.log("success")).catch((err)=>console.log(err));

//mongo schema defines the structure 

const playlistSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age : Number,
    fatherName:String,
    author:String,
    email: {
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email Is Invalid")
            }
        }
    },
    phone: {
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isMobilePhone(value)){
                throw new Error("phone Is Invalid")
            }
        }
    },
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    },
})

const playlist = new mongoose.model("playlist",playlistSchema);

const reactPlaylist = new playlist({
    name: "himanshu",
    age: 21,
    fatherName:"pavan k k",
    author:"himanshu",
    email:"hk12@gmail.com",
    phone: "75977645",
    active:true,
})


const getDocument = async() => {
    const result = await playlist.find({name:"himanshu"}).select({name:1}).sort("name:1");
    // const result = await playlist.find({name:"himanshu"}).select({name:1}).countDocuments()
    console.log(result)
}

// getDocument()

const updateDocument = async(_id)=>{
    try{
        const result = await playlist.updateOne({_id},{
            $set:{
                name:"ravi kumar"
            }
        }
            )
            console.log(result)
    }catch(err){
        console.log(err)
    }
}
// updateDocument('630707a1f9f59072fe1c8a99')
reactPlaylist.save();