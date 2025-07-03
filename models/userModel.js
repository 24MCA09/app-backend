const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:[3,'Must be atleast 3,got {value}']
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
                type:String,
                required:true
            }
})

//model 
const users = mongoose.model("users",userModel)

module.exports = users