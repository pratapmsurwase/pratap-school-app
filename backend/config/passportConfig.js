
const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')

var User = mongoose.model('User');

passport.use( new localStrategy({usernameField: 'userId'}, (username, password, done) => {
       User.findOne({userId: username}, (err, user) => {
       if(err) {
            return done(err) 
          // this is unknown error 
               } else if(!user) {
                     return done(err, false, {message:'Student is not registered, register the Student'})
            } 
           else if (!user.verifyPassword(password)) {
               return done(null, false, {message:'Wrong Password'})
           } else {
               return done(null, user)
             // Authenticated Successeded  
           }

           } )
   }
    ))

  //   passport.use( new localStrategy({usernameField: 'userId'}, (username, password, done) => {
  //     User.findOne({userId: username}, (err, user) => {
  //     if(err) {
  //          return done(err) 
  //        // this is unknown error 
  //             } else if(!user) {
  //                   return done(err, false, {message:'Student is not registered, register the Student'})
  //          } 
  //         else if (!user.verifyPassword(password)) {
  //             return done(null, false, {message:'Wrong Password'})
  //         } else {
  //             return done(null, user)
  //           // Authenticated Successeded  
  //         }

  //         } )
  // }
  //  ))