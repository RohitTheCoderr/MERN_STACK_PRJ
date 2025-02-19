const { required } = require('joi')
const mongoose =require('mongoose')
// const Schema= mongoose.Schema;

const userSchema= new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

 const  UserModel= mongoose.model("users", userSchema)
module.exports =UserModel;