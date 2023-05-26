const mongoose=require('mongoose')

const connect=async()=>{
    mongoose.set("strictQuery",false)
    return mongoose.connect(process.env.DB_URL).then().catch(err=>
        console.log(err)
        )
}
 module.exports=connect