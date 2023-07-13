
const mongoose=require("mongoose")

const postschema=mongoose.Schema({
    title:String,
    body:String,
    device:String,
    number_of_comment:String,
    username:String,
    userID:String

})

const postmodel=mongoose.model("blog",postschema)

module.exports={postmodel}