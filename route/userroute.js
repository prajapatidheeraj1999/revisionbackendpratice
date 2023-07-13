const express=require("express")
const {usermodules} =require("../module/usermodule")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userouters=express.Router()

userouters.post("/register",async(req,res)=>{

    let {name,email,password,gender,age,city,isMarried}=req.body

    try{
        let data= await usermodules.findOne({email})
        if(data){
            res.send({"mas":"users is allready present"})

        }else{
            bcrypt.hash(password, 5, async(err, hash)=>{

                if(hash)
                {
                    let add=await usermodules({name,email,password:hash,gender,age,city,isMarried})
                    await add.save()
                    res.send({"mas":"user register succesfully"})
                }
                // Store hash in your password DB.
            })


        }
        

    }catch(error){
        console.log("something is wrong")
    }


})

userouters.post("/login",async(req,res)=>{
    
    let {email,password}=req.body
    try{
        let data=await usermodules.findOne({email})
        if(data)
        {
            bcrypt.compare(password, data.password, function(err, result) {

                if(result)
                {
                    const token = jwt.sign({ username:data.name,userID:data._id}, 'dheeraj')
                    res.send({"token":token})
                }else{
                    res.send({"mas":"password is wrong"})
                }
                // result == true
            })


        }else{
            res.send({"mas":"user is not present"})

        }
        
    }catch(error){
        console.log("something is wrong")
    }

})

module.exports={userouters}