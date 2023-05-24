const fs = require("fs")
const db = require("../db.json")
const express = require("express")

const app=express.Router()
app.get("/", (req, res) => {
    console.log(req.method, req.url)
    res.send(db.blogs)

})
app.post("/", (req, res) => {
    db.blogs.push({ id: Date.now(), message: "message is not for you" })
    

    fs.writeFile("./src/db.json", JSON.stringify(db), "utf-8", () => {
        res.send(db.blogs)
    })
})

app.get("/:id", (req, res) => {
    let id = req.params.id
    let numId = Number(id)
    let post = db.blogs.find((post) => post.id === numId)
    if (post) {
        res.send(post)
    } else {
        res.status(404).send(`Post with ID:${id} not found`)
    }
})
app.put("/:id",(req,res)=>{
    const body = req.body;
    let id = req.params.id
    let numId = Number(id)
    let post = db.blogs.findIndex((post) => post.id === numId)
    if (post !== -1) {
        db.posts[post] = { ...db.posts[post], ...body }
        fs.writeFile("./src/db.json", JSON.stringify(db), "utf-8", () => {
            // res.send(db.posts)
            res.send(db.blogs[post])
        })
    } else {
        res.status(404).send(`Post with ID:${id} not found`)
    }
})
app.patch('/:id', (req, res) => {
    const body = req.body;
    let id = req.params.id
    let numId = Number(id)
    let post = db.blogs.findIndex((post) => post.id === numId)
    if (post !== -1) {
        db.blogs[post] = { ...db.blogs[post], ...body }
        fs.writeFile("./src/db.json", JSON.stringify(db), "utf-8", () => {
            // res.send(db.posts)
            res.send(db.blogs[post])
        })
    } else {
        res.status(404).send(`Post with ID:${id} not found`)
    }

})

app.delete("/:id", (req, res) => {
    let id = req.params.id
    let numId = Number(id)
    let posts = db.blogs.filter((post) => post.id !== numId)
    db.blogs = posts
    fs.writeFile("./src/db.json", JSON.stringify(db), "utf-8", () => {
        fs.send("deleted successfully")
    })

})

module.exports=app