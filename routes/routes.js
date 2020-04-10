var express=require('express')
var router=express.Router()
var registerFile=require('../controller/register');

router.post('/registerdata',registerFile.register);

module.exports=router;