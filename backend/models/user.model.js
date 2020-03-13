const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken') 


var userSchema = new mongoose.Schema({
  userId:{ type:String, required:true, unique: true },
 fullName: { type:String, required:true, unique: true },
 email: {
  type: String,
   required: true,
   lowercase: true
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
  validate(value) {
      if (value.toLowerCase().includes('password')) {
          throw new Error('Password cannot contain "password"')
      }
  }
}, 
tokens:[{
 token: {
   type: String,
   required: true,
   },
   
}],
 DOB : {type: String},
 Address : { type: String },
 ParentPhone1 : { type: Number },
 ParentPhone2 : { type: Number },
 Standard : {type: String}
 }, {
  timestamps: true
} 
) 

userSchema.virtual('tasks', {
  ref:'Task',
  localField: '_id',
  foreignField: 'studentId'
})
// Custom validation for email
// userSchema.path('email').validate((val) => {
//   emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return emailRegex.test(val);
// }, 'Invalid e-mail.');

// Pre Events for this schema 
// userSchema.pre('save', function(next) {
//   bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(this.password, salt, (err, hash) => {
//      this.password = hash;
//      this.saltSecret = salt
//      next()
//     })
//   })
// }) 
//  userSchema.pre('save', async function(next) { 
//    const user = this 
//    if (user.isModified('password')) {
//      user.password = await bcrypt.genSalt(10, (err, salt) => {
//       bcrypt.hash(this.password, salt, (err, hash) => {
//        this.password = hash;
//        this.saltSecret = salt
//    } )}
//      )   }
//        next()
//       }) 

userSchema.methods.toJSON = function () {
  const user = this
  const userObject = user.toObject()
  delete userObject.password
  delete userObject.tokens 
  return userObject
   }
userSchema.statics.findByCredentials =  async (userId, password) => {
  const user = await User.findOne({userId}) 
  if(!user) {
    throw new Error('Unable to login')
    } 
const isMatch = await bcrypt.compareSync(password, user.password)
if(!isMatch) {
  throw new Error('Unable to login')
}
return user
}


userSchema.pre('save', async function(next) {
  const user = this 
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)
  } 
  next()
})
 
userSchema.methods.verifyPassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

userSchema.methods.generateJWT = function() {
  return jwt.sign({_id: this._id},
     process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXP
     })
 }  

 

 userSchema.methods.generateAuthToken = async function() { 
   const user = this
  const token = await jwt.sign({_id:user._id.toString()}, process.env.JWT_SECRET ,
  { expiresIn: process.env.JWT_EXP})  
  user.tokens = user.tokens.concat({token}) 
  await user.save()
  return token
 }
//  studentSchema.methods.generateJWT = function() {
//   return jwt.sign({_id: this._id},
//      process.env.JWT_SECRET, {
//       expiresIn: process.env.JWT_EXP
//      })
//     }


const User = mongoose.model('User', userSchema) 
module.exports = User
 
