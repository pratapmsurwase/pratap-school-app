const express = require('express') 
const router = express.Router() 
const User = require('../models/user.model')
const AdminUser = require('../models/admin.model')
const passport = require('passport')
const jwtHelper = require('../config/jwtHelper')
const auth1 = require('../middleware/auth')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/adminauth')
const ctrlUser = require('../controller/user.controller')

//Admin/-staff user creation
router.post('/adminregister', async(req, res) => {
 var admin = new AdminUser(req.body)
 try { 
    const token = await admin.generateJWT()
       await admin.save()  
       res.status(201).send({admin})
      }
      catch (e) {
       res.status(400).send({message:'Problem may of Duplicate UserID, Fullname or Password Field Contain Password'}) 
   }

})

//Admin login wiht token creation
router.post('/adminlogin', async(req, res) => {
    try{
        const admin = await AdminUser.findByCredentials(req.body.email, req.body.password)
        const token = await admin.generateJWT()
         res.send({admin, token})
       } catch(e) {
           res.status(500).send({message:'Enable to login check userId or Password'})
       }
})


//Creation of Student Personal Data Updated
router.post('/register', authAdmin,  async (req, res, next) => { 
    var user = new User(req.body) 
     try { 
//   const token = await user.generateAuthToken()
   await user.save()  
     res.status(201).send({user})
    }
    catch (e) {
     res.status(400).send({message:'Problem may of Duplicate UserID, Fullname or Password Field Contain Password'}) 
 }
 } )  

  ///******/ jwtHelper.verifyJWTToken
 router.get('/users/me', auth, async(req, res) => { 
    res.send(req.user) 
    
 }) 
 router.post('/login', async (req, res) => {
    try{
   const user = await User.findByCredentials(req.body.userId, req.body.password)
   const token = await user.generateAuthToken()
    res.send({user, token})
  } catch(e) {
      res.status(500).send({message:'Enable to login check userId or Password'})
  }
})

router.post('/logout', auth, async(req, res) => {
    try {
       req.user.tokens = req.user.tokens.filter((token) => {
           return token.token !== req.token
       })

       await req.user.save()
       res.send({message: 'User is succsefully logged off'})

    } catch (e) {
        res.status(500).send()    
    }
})

router.post('/logoutAll', auth, async(req, res) => {
    try {
    req.user.tokens = [] 
    await req.user.save() 
    res.status(200).send({message:'All Tokens are wipped'})

    } catch(e) {
        res.status(500).send({message:'Provided Token is not Valid '})  
    }
})



router.get('/userData/:_id', authAdmin, async (req, res, next) => { 
    const _id = req.params._id
    
    try {
        const kkk = await User.findById({_id}) 
            res.send(kkk)
    } 
    catch (e) {
        res.status(500).send()
    }      
})

router.get('/userDataUserID/:userId', authAdmin, async (req, res, next) => { 
    const userId = req.params.userId
    
    try {
        const kkk = await User.findOne({userId: userId}) 
            res.send(kkk)
    } 
    catch (e) {
        res.status(500).send()
    }      
})
//Get All User Data
router.get('/allusers', authAdmin, async(req, res, next) => {
   
    try {
    const user = await User.find({})
    if (!user) {
        return res.status(404).send()
    }
    res.send(user)
    } 
    catch (e) {
        res.status(500).send()
    }
}) 

// Update user updated by Admin user
router.patch('/userUpdate/:userId', authAdmin, async (req, res) => { 
    
    const updates = Object.keys(req.body) 
   const allowedUpdates = ['userId', 'fullName', 'email', 'password', 'DOB', 'Address', 'ParentPhone1', 'ParentPhone2', 'Standard' ] 
   const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
   if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' })
} 
try { 
     const user = await User.findOne({userId: req.params.userId}) 
       updates.forEach((update) => user[update] = req.body[update]) 
    await user.save()
     res.send(user)
  if(!user) {
      return res.status(404).send({message: 'User is not created'})
  }
   
} catch (e) {
    res.status(400).send({ error: 'Not able to updates!'} )
}   
}) 

// Update user by user itself
router.patch('/users/me', auth, async (req, res) => { 
   const updates = Object.keys(req.body) 
   const allowedUpdates = ['userId', 'fullName', 'email', 'password', 'DOB', 'Address', 'ParentPhone1', 'ParentPhone2', 'Standard' ] 
   const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
   if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' })
} 
try { 
     updates.forEach((update) => req.user[update] = req.body[update]) 
    await req.user.save()
     res.send(req.user)
  
} catch (e) {
    res.status(400).send({ error: 'Not able to updates!'} )
}   
}) 

//Get Statandrad for Admin user
router.get('/getStd/:Standard', authAdmin,  async  (req, res) => { 
    const std = req.params.Standard 
      try {
        // console.log(std)
        const Standard =  await User.find({Standard: std})
         res.send(Standard)
     } catch (e) {
        res.status(400).send({ error: 'Not able to find the satandard!'} )  
    }
    
 })


// delete user updated
 router.delete('/users/:userId', authAdmin, async (req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.userId)  
        if(!user) {
            return res.status(400).send()
        } 
    // await req.user.remove()
       res.send(user)
    //    res.send(req.user)
    //  
  } 
    catch (e) {
        res.status(500).send(e)
    }
  })  

  

// router.post('/authenticate', ctrlUser.authenticate) // this is required route
// router.get('/userProfile', jwtHelper.verifyJWTToken, ctrlUser.userProfile) /// this is required route



// router.get('/getStandard', ctrlUser.getStandard)  // this is required route




// router.get('/studentProfile', jwtHelper.verifyJWTTokenS, ctrlUser.studentProfile)

module.exports = router;
