require('dotenv').config()
const express = require("express");
const cors = require("cors");
const users=require("./routes/user.js")
const connect=require('./Config/db.js')
const product=require('./routes/product.js')


const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8000;

app.use('/api/user',users)
app.use('/api/products',product)

//api
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT,async()=>{
  try {
    await connect()
    console.log("db connected")
  } catch (error) {
    console.log(error)
  }
  console.log(`listening to the port ${PORT}`)
})









