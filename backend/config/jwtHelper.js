const jwt = require('jsonwebtoken')

module.exports.verifyJWTToken= function(req, res, next) {
var token ;
    if('authorization' in req.headers)

   token = req.headers['authorization'].split(' ')[1]; 
   
   if(!token) 
   return res.status(403).send({auth: false, messsage:'No taken Provided'})
 else {
  
     jwt.verify(token, process.env.JWT_SECRET ,   (err, decoded) => { 
      console.log(token)
     if(err) return res.status(500).send({auth: false, messsage: 'Token Authorization fail'})
     else {
       req._id = decoded._id
      //  console.log(req._id)
      
        next()
       }
    
      }   )
 }
} 

module.exports.verifyJWTTokenS= function(req, res, next) {
  var token ;
      if('authorization' in req.headers)
  
     token = req.headers['authorization'].split(' ')[1]; 
     
     if(!token) 
     return res.status(403).send({auth: false, messsage:'No taken Provided'})
   else {
    
       jwt.verify(token, process.env.JWT_SECRET ,   (err, decoded) => { 
        console.log(token)
       if(err) return res.status(500).send({auth: false, messsage: 'Token Authorization fail'})
       else {
        req._id = decoded._id
       console.log(req._id)
        
          next()
         }
      
        }   )
   }
  } 

  module.exports.verifyJWTTokenst = function(req, res, next) {
    var token ;
    if('authorization' in req.headers)

   token = req.headers['authorization'].split(' ')[1]; 
   
   if(!token) 
   return res.status(403).send({auth: false, messsage:'No taken Provided'})
 else {  
     jwt.verify(token, process.env.JWT_SECRET ,   (err, decoded) => { 
      console.log(token)
     if(err) return res.status(500).send({auth: false, messsage: 'Token Authorization fail'})
     else {
       req.Standard = decoded.Standard
       console.log(req.Standard)
         next()
       }
    
      }   )
 }

  }

