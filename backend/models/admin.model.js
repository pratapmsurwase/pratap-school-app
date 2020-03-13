const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken') 

var adminSchema = new mongoose.Schema({
  email: {
    type: String,
     required: true,
     unique: true,
     lowercase: true,
    // validate(value) {
    //     if (!validator.isEmail(value)) {
    //         throw new Error('Email is invalid')
    //     }
    // }
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    trim: true,
    // validate(value) {
    //     if (value.toLowerCase().includes('password')) {
    //         throw new Error('Password cannot contain "password"')
    //     }
    // }
  } 
} ,{
  timestamps: true
}    ) 

adminSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()
    delete userObject.password
    delete userObject.tokens 
    return userObject
     }

adminSchema.statics.findByCredentials =  async (email, password) => {
    const user = await AdminUser.findOne({email}) 
    if(!user) {
      throw new Error('Unable to login')
      } 
  const isMatch = await bcrypt.compareSync(password, user.password)
  if(!isMatch) {
    throw new Error('Unable to login')
  }
  return user
  }

adminSchema.pre('save', async function(next) {
    const user = this 
    if (user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, 8)
    } 
    next()
  })

  adminSchema.methods.generateJWT = function() {
    return jwt.sign({_id: this._id},
       process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXP
       })
   }  
  
//   adminSchema.methods.generateAuthToken = async function() { 
//     const user = this
//    const token = await jwt.sign({_id:user._id.toString()}, process.env.JWT_SECRET ,
//    { expiresIn: process.env.JWT_EXP})  
//    user.tokens = user.tokens.concat({token}) 
//    await user.save()
//    return token
//   }
const AdminUser = mongoose.model('AdminUser', adminSchema)
module.exports = AdminUser