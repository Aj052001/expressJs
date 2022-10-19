
const path = require('path') 
const express = require('express');
const app = express();
const hbs = require("hbs")
const portName = 8002

const templatePath = path.join(__dirname,"../templates")
app.set('views',templatePath);

// to set the view engine
app.set("view engine","hbs");

//template engine route
app.get("/",(req,res)=>{
   res.render('index',{
    channelName:"ajay"
   })
})
app.get("/about",(req,res)=>{
   res.render('about')
})

app.listen(portName,()=>{
    console.log(` Listening the port at ${portName}`)
})