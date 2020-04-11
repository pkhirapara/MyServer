const mongoose=require('mongoose')
var registerDetails=mongoose.Schema({
    name:{type:String},
    email:{type:String},
    mob:{type:Number},
    password:{type:String}
})//schema is a class of mongoose 

var registerModel=mongoose.model('registerdatas',registerDetails)
module.exports=registerModel