require('./config/config.js')
require('./models/db')
require('./config/passportConfig')
const path = require('path') 

const passport= require('passport')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const rtxUser = require('./routes/usertask')
const task = require('./routes/studenttask')
var app =express()
var Port = process.env.PORT || 4600
app.use(bodyParser.json() ) 
app.use(passport.initialize())
app.use(cors())
app.use(express.static(path.join(__dirname, 'dist')))
app.use('/api', rtxUser )
app.use('/api', task)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/school-app/index.html'))
})


app.listen(Port, () => {
  console.log(`Server Started on Port ${Port}`)  
})

// const Task = require('../school-app/models/studenttask.model') 
// const User = require('../school-app/models/user.model')
// const dd = async() => { 
//   try {
//     // const task = await Task.findById('5d2697e2fa6158452018b92d') 
//     // await task.populate('studentId').execPopulate() 
//   const user = await User.findById('5d260fa841c88325005a404f') 
//   await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
//   }
//   catch (e) {
//   console.log('Erooor')
//   }
// } 
// dd()
