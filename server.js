const express=require('express');
const mongoose=require('mongoose')
const app=express();
const PORT=8000;
const route=require('./routes/routes')
var bodyparser=require('body-parser')
var cors=require('cors');

mongoose.connect('mongodb://localhost:27017/test', (err)=>{
    if(err) throw err
    console.log('connected to db')
})

app.use(cors())
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))
app.use(route);
app.listen(PORT, (err)=>{
    if(err) throw err
    console.log("server connected to port" + PORT)
})

/*app.get('/',(req,res)=>{
    res.send("welcome to nodejs")
})

//asychoronous function
app.listen(2700,(err)=>{
    if(!err){
        console.log("server listening port of 2700")
    }else{
        console.log("something went wrong",err)
    }
})*/
