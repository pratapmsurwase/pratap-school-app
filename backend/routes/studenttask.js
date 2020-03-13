
const express = require('express') 
const Task = require('../models/studenttask.model')
const auth = require('../middleware/auth')
const router = new express.Router()
const AdminUser = require('../models/admin.model')
const authAdmin = require('../middleware/adminauth')
const User = require('../models/user.model')
 //Create Student Progress Data update
 router.post('/studentTask/:_id', authAdmin , async (req, res) => {  
       const studentData = new Task({
        ...req.body,
    
    studentId : req.params._id 
    })
    try { 
        await studentData.save() 
    res.status(201).send(studentData)
    } catch (e) {
       res.status(500).send()   
    }
    })

///Get all Student progress by individual user not admin
router.get('/studentTask', auth, async (req, res) => {
    try {
//    const tasks = await Task.find({studentId: req.user._id})
    await req.user.populate('tasks').execPopulate()
     res.send(req.user.tasks)
      } catch (e) {
     res.status(400).send(e)
    }
    } )  

    //Get all task data against the user by using admin login credentails
router.get('/useridtask/:_id', authAdmin, async(req, res) => { 
    const _id = req.params._id
    try { 
        const task = await Task.findById({ _id}) 
        if (!task) { 
            const user = await User.findById({_id})
            return res.status(201).send(user)
        }
        res.send(task) 
    }
    catch (e) {
        res.status(400).send(e)
    }
    
} ) 


// Get task by studentId
router.get('/studentTask/:userId', authAdmin, async (req, res) => {
    const _id= req.params.userId  
          try {
    const studentData = await Task.find({studentId:_id}) 
    if(!studentData) {
        res.status(400).send(e)
    }
   res.send(studentData)
     }  catch(e) {
        res.status(400).send(e)
     }
 } ) 

//Get all task
router.get('/getAllTask', authAdmin, async(req, res) => {
    try {
const tasks = await Task.find({})
res.send(tasks)
    } 
    catch(e) {
        res.status(400).send(e)  
    }
})

 // Update student data updated
 router.patch('/studentTask/:userId', authAdmin, async(req, res) => { 
    const _id = req.params.userId
   
    const updates = Object.keys(req.body) 
   const allowedUpdates = ['userId', 'fullName','English','Matha','Hindi' ] 
   const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
   if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' })
} 
try { 
    
        // const studentData = await Task.findOneAndUpdate(req.params.userId, req.body )
        const task = await Task.findById({_id: req.params.userId} ) 
          updates.forEach((update) => task[update] = req.body[update]) 
        await task.save()
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
        
    
} catch (e) {
    res.status(400).send({ error: 'Not able to updates!'} )
}   
} )  

// student data delete updated
router.delete( '/studentTask/:id', authAdmin,  async(req, res) => {
    try {
    const studentData = await Task.findOneAndDelete({ _id: req.params.id }) 
    if(!studentData) {
     return res.status(400).send({message:'Student Task data is not present'})
    } 
   res.send(studentData)
    } catch (e) {
        res.status(500).send({error:'Student task is not created '})
    }
}) 

module.exports = router;