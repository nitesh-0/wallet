const express = require("express")
const {User, Account} = require("../db")
const {signupZod, signinZod, updateZod} = require("../type")
const {JWT_SECRET} = require("../config")
const jwt = require("jsonwebtoken")
const { authMiddleware } = require("../middleware")

const router = express.Router()

router.post("/signup", async (req, res) => {
    const signupBody = req.body

    const isValidBody = signupZod.safeParse(signupBody)

    if(!isValidBody.success){
       return res.status(411).json({
            msg: "Invalid input format"
        }) 
    }

    const existingUser = await User.findOne({
        email: req.body.email,
    })

    if(existingUser){
      return res.status(411).json({
            msg: "user already exists",
        }) 
    }

    const newUser = await User.create({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })

    const userId = newUser._id

    const amount = await Account.create({
        userId: userId,
        balance: 1 + Math.random() * 1000
    })

    const token = jwt.sign({
        userId
    }, JWT_SECRET)
    
    res.json({
        msg: "user created successfully",
        token: token
    })

})

router.post("/signin", async (req, res) => {
    const signinBody = req.body
    
    const isValidSignin =  signinZod.safeParse(signinBody)

    if(!isValidSignin.success){
        res.json({
            msg: "Invalid input format"
        })
        return
    }

    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })

    if(signinUser){
       const token = jwt.sign({
        userId: signinUser._id
       }, JWT_SECRET)

       res.json({
        msg: "signin successfull",
        token: token
    })
    return
    }    
})

router.put("/update", authMiddleware, async (req, res) => {
    const updateBody = req.body

    const isvalidUpdate = updateZod.safeParse(updateBody)

    if(!isvalidUpdate.success){
        return res.status(411).json({
            msg: "invalid input format"
        })
    }

    const updatedUser = await User.updateOne({
        _id: req.userId
    }, req.body)

    res.json({
        msg: "user updated successfully"
    })
    
})

router.get("/me", authMiddleware, async (req, res) => {

const selfUser = await User.findOne({
    _id: req.userId
})

res.json({
    selfUser
})
})

router.get("/bulk", authMiddleware, async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        _id: {
             $ne: req.userId
        }, // Exclude currently logged in user (gives all the users except self)
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

module.exports = router