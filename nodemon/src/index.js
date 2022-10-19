const path = require('path')
const express =  require('express')
const app = express();
const portName = 8000;

app.get("/",(req,res)=>{
    res.send("home ajay")
})

app.listen(portName,()=>{
    console.log(`listening on ${portName}`)
})