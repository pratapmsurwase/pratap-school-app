var mongoose = require('mongoose')
const passport = require('passport')
var User = mongoose.model('User') 

const _ = require('lodash')
const bodyParser = require('body-parser')


// Get Standard Data
    module.exports.getStandard = (req, res, next) => {
       var user = new User()
          user.std = req.query.Standard
          console.log(user.std)
          User.find({Standard: user.std}, (err, doc) => {
            console.log(doc)
            res.send(doc)
            //  if(doc) return res.status(200).json({"token":  doc.generateJWT() })
       }  )
    }

// module.exports.authenticate = (req, res, next) => {
//      //call for authentication
//  passport.authenticate('local', (err, user, info) => {

//  //error from passport midddleware
//  if(err)  return res.status(400).json(err)

//  // Registered user got
//  else if(user)  return res.status(200).json({"token":  user.generateJWT() })

// // Unknown user or wrong password
// else  return res.status(404).json(info)

// }) (req, res)
//  }

 //this is for student data view for Student login***
 module.exports.studentProfile = (req, res, next) => {
    StudentData.findOne({_id: req._id}, (err, user) => {
        // console.log('the is is ',_id)
        if(!user)
        return res.status(404).json({status: false, message: 'User record not found'})
      else
       return res.status(200).json({status: true, user:_.pick(user, [ 'userId','fullName', 'DateAt','English','Matha','Hindi' ])})

    })

 }

module.exports.getStandardProfile = function(req, res, next) {
    User.find({ Standard : sclass}, (err, doc) => {
        console.log(doc.userId)
        if(!doc)
            return res.status(404).json({status: false, message: 'Standard not found'})
            else
            return res.status(200).json({status: true, doc:_.pick(doc, ['userId','fullName','Standard', 'email', 'DOB', 'Address', 'ParentPhone1',
            'ParentPhone2','CreationDateAt' ])})
    } )
}


 //this is for student personal data view for Student login***
 module.exports.userProfile = (req, res, next) => {
     User.findOne({_id: req._id},(err, user) =>{
      if(!user)
      return res.status(404).json({status: false, message: 'User record not found'})
    else
     return res.status(200).json({status: true, user:_.pick(user, ['userId','fullName','Standard', 'email', 'DOB', 'Address', 'ParentPhone1',
     'ParentPhone2','CreationDateAt' ])})
               } )

 }
