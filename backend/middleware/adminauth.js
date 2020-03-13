const jwt = require('jsonwebtoken')
const User = require('../models/user.model') 
const AdminUser = require('../models/admin.model') 

const authAdmin = async (req, res, next) => {
    try {
  const token = req.header('Authorization').replace('Bearer ', '')  
  const decoded = jwt.verify(token, process.env.JWT_SECRET)
  const user = await AdminUser.findOne({_id: decoded._id})
 if(!user) {
     throw new Error()
 }
 req.token = token
//  req.user = user
 next()
    }  catch (e) {
   res.status(500).send({error: 'Please Authenticate it is admin error'})
    }
   
}
module.exports = authAdmin