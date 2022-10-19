const path = require ('path')
const requests = require('requests')
const express = require('express')
const app =  express()
const hbs = require('hbs')
const partName  = 8001

const staticPath  = path.join(__dirname,"../public")
// console.log(staticPath)


app.use(express.static(staticPath))
const templatePath  = path.join(__dirname,"../templates/views")
const partialsPath  = path.join(__dirname,"../templates/partials")
app.set("views",templatePath)
hbs.registerPartials(partialsPath);

app.set("view engine","hbs")
app.get("/",(req,res)=>{
    res.render('index',{
        home :"Ajay"
    })
})
app.get("/about",(req,res)=>{
    requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&APPID=99a1250d9c57fb22cf2d6997dbc90c0e`)
    
    .on("data",(chunk)=>{
   const objData = JSON.parse(chunk)
   const arrayData = [objData];
console.log(`the city name is ${arrayData[0].name} ane the temp is ${arrayData[0].main.temp}`)
       res.write(arrayData[0].name);
})

    
    .on("end",(err)=>{
        if(err) return console.log("connection close due to  errors ",err);
       res.end();
    });
})






app.get("/",(req,res)=>{
   res.send("ajay")
})

app.get("/about/*",(req,res)=>{
   res.render("404",{
    errorcomment :"404 about page not found"
   })
})


app.listen(partName,()=>{
    console.log(`listening on ${partName}`)
})