require('dotenv').config()
const express=require("express")
const connect=require('./config/db.js')
const cors=require('cors')

const app=express()

app.use(express.json())
app.use(cors())

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