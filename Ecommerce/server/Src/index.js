require('dotenv').config()
const express=require("express")
const connect=require('./config/db.js')
const cors=require('cors')
const userRoute = require("./routes/user.js");
const authRoute = require("./routes/auth.js");
const productRoute = require("./routes/product.js");
const cartRoute = require("./routes/cart.js");
const orderRoute = require("./routes/order.js");
const stripeRoute = require("./routes/stripe.js");

const app=express()


app.use(express.json())
app.use(cors())

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);


const PORT=process.env.PORT

app.listen(PORT,async()=>{
    try {
        await connect()
        console.log("db connected")
        
    } catch (error) {
        console.log(error)
        
    }
    console.log(`listening to the port ${PORT}`)
})