const express=require("express")
const {connection} =require("./db")
const {userouters} =require("./route/userroute")
const {varification}=require("./middelware/varification")
const {postrote}=require("./route/postroute")
const cors = require('cors')
const app=express()
app.use(cors())
app.use(express.json())

app.use("/users",userouters)

app.use(varification)

app.use("/blog",postrote)

app.listen(8080,async()=>{

    try{
        await connection
        console.log("connection is stablesh")

    }catch(error)
    {
        console.log("somting is wronge")
    }
   
})