const express=require("express")

const stripeRouter=express.Router()
const KEY=process.env.STRIPE_KEY
const stripe=require("stripe")(KEY)

stripeRouter.post("/payment",(req,res)=>{
    stripe.charges.create(
        {
            source:req.body.tokenId,
            amount:req.body.amount,
            currency:'used'
        },
        (stripeErr,stripeRes)=>{
            if(stripeErr){
                res.status(500).json(stripeErr)
            }else{
                res.status(200).json(stripeRes)
            }
        }
    )
})
module.exports=stripeRouter