const express=require("express")

const {postmodel}=require("../module/postmodule")

const postrote=express.Router()

postrote.post("/add",async(req,res)=>{
    

    try{
        let add=await postmodel(req.body)
        await add.save()
        res.send({"mas":"post has been created"})

    }catch(error){
        res.send({"mas":"something is wrong"})

    }

})

postrote.get("/get",async(req,res)=>{
    let data=req.body
    let device=req.query
    console.log({userID:data.userID,...device})

    try{
        
        let add=await postmodel.find({userID:data.userID,...device})
        
        res.send({"mas":add})

    }catch(error){
        res.send({"mas":"something is wrong"})

    }

})
postrote.patch("/update/:id",async(req,res)=>{
    let data=req.body
    let {id}=req.params
    console.log(data,id)

    try{
        let finders=await postmodel.findOne({_id:id})
        if(finders)
        {
            if(finders.userID==data.userID)
            {
                await postmodel.findByIdAndUpdate({_id:id},data)
                res.send({"mas":"data has been changes"})
            }else{
                res.send("you are not authorise preson")
            }

        }else{

            res.send({"mas":"data is not present"})

        }
        
       

    }catch(error){
        res.send({"mas":"something is wrong"})

    }

})

postrote.delete("/deletes/:id",async(req,res)=>{
    let data=req.body
    let {id}=req.params
    try{
        let finders=await postmodel.findOne({_id:id})
        if(finders)
        {
            if(finders.userID==data.userID)
            {
                await postmodel.findByIdAndDelete({_id:id})
            }else{
                res.send("you are not authorise preson")
            }

        }else{

            res.send({"mas":"data is not present"})

        }
        
       

    }catch(error){
        res.send({"mas":"something is wrong"})

    }

})

module.exports={postrote}