const jwt = require('jsonwebtoken')
function varification(req,res,next){
let token=req.headers.authorization

    try{
        console.log(token)
        jwt.verify(token, 'dheeraj', function(err, decoded) {
            console.log(decoded)
            req.body.username=decoded.username 
            req.body.userID=decoded.userID 
          });
          next()



    }catch(error)
    {
        res.send({"mas":"pls login"})

    }

}
module.exports={varification}