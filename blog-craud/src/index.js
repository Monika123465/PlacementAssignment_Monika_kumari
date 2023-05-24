const express=require("express")
const blogRoutes=require("./router/blog.route.js")
const app = express()

app.use(express.json({}))
app.use("/blogs",blogRoutes)
app.get("/", (req, res) => {
    console.log(req.method, req.url)
    res.send("hlw , this is my home page")
})



app.listen(4200, () => {
    console.log("Listening .. on http://localhost:4200/")
})