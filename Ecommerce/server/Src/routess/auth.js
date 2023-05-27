const express=require('express')
const User=require('../model/user.schema.js')
const cryptoJS=require('crypto-js')
const jwt=require("jsonwebtoken")

const authRouter=express.Router()

//Register
authRouter.post('/register',async(req,res)=>{
    const newUser=new User({
        username:req.body.username,
        email:req.body.email,
        password:cryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString()

    })
    try {
        const savedUser=await newUser.save()
        res.status(201).json(savedUser)
        
    } catch (error) {
        res.status(500).json(err)
    }
})

//Login
authRouter.post('/login',async(req,res)=>{
  try {
    const user=await User.findOne({username:req.body.username})
    !user && res.status(401).json("wrong credentials")

    const hashedPassword=crypto.AES.decrypt(
        user.password,
        process.env.PASS_SEC
    )
    const OriginalPassword=hashedPassword.toString(CryptoJs)
    
  } catch (error) {
    
  }
    
})