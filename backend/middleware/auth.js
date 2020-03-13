const jwt = require('jsonwebtoken')
const User = require('../models/user.model') 
const AdminUser = require('../models/admin.model') 

const auth1 = async(req, res, next) => {
    console.log('Autorization you re')
}

const auth = async (req, res, next) => {
    if('authorization' in req.headers)
   token = req.headers['authorization'].split(' ')[1] 
      try {     
   const decoded = jwt.verify(token, process.env.JWT_SECRET)
  const user = await User.findOne({_id: decoded._id, 'tokens.token': token})
 if(!user) {
     throw new Error()
 }
 req.token = token
 req.user = user
 next()
    }  catch (e) {
   res.status(500).send({error: 'Please Authenticate it is error'})
    }
   
}

module.exports = auth1
module.exports = auth
