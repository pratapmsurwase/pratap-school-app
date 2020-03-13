const mongoose = require('mongoose')

const studentTask =  new mongoose.Schema ({ 
  userId:{type:String},
  fullName: {type: String},
  English : { type: String },
  Matha : {type: String},
  Hindi : { type: String  },
  studentId : {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref:'User'
  } },
  {
    timestamps: true
  } 

)


    

 const Task = mongoose.model('Task', studentTask)
 module.exports = Task
  