var express=require('express')
var router=express.Router()
var registerFile=require('../controller/register');

router.post('/registerdata',registerFile.register);
router.get('/getData',registerFile.getData);

module.exports=router;