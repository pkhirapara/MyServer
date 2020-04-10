var registerModel=require('../model/register');

module.exports={

    register:(req,res)=>{
       
        console.log(req.body,"dhjdgh")
        
        var registerData=new registerModel({
            name:req.body.username,
            email:req.body.email,
            mob:req.body.mobile
           
        })  
        registerData.save().then(data=>{
			if(!data){
				res.json({success:false,message:"Something went wrong"})
			}else{
				res.json({success:true,message:"Successfully saved",data:data})
			}
		}).catch(err=>{
			console.log(err)
		})  
    }   
}