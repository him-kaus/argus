const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()




const staticPath = path.join(__dirname,'../public')
const templatePath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partials')
// app.use(express.static(staticPath))


app.set("view engine","hbs")
app.set('views',templatePath)
hbs.registerPartials(partialPath)

app.get("",(req,res) => {
    res.render("index")
   
})

app.get("/about",(req,res) => {
    res.render("about")
})

// app.get("/",(req,res) => {
//     res.send("Hello Home Page")
// })

// app.get("/about",(req,res) => {
//     // res.send("Hello From About Page")
//     res.sendFile(path.join(__dirname,'../public/about.html'))
// })
app.get("*",(req,res) => {
    res.render("404")
})

app.listen(8000,() => {
    console.log('Listen')
})