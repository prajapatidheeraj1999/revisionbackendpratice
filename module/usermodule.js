
const mongoose=require("mongoose")

const userschema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    gender:String,
    age:Number,
    city:String,
    isMarried:Boolean,

})

const usermodules=mongoose.model("users",userschema)

module.exports={usermodules}