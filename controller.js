const {checkphone}=require('./db')
const homePage=(req,res)=>{
    res.status(200).json({message:"Home page"})
}

const userRegister = (req,res)=>{
    var data=req.body;
    console.log(data);
    const checkPhone=(data.phone,(err,result)=>{
        if(err){
            res.status(500).json({message:"server Error"})
        }else{
            if(result.length==0){
                res.status(404).json({message:"User not found"})

            }else{
                res.status(200).json({message:"phone taken"})
            }
        }
    })
    res.status(200).json({message:"user Registered"})
}

const userLogin= (req,res)=>{}





module.exports={
    homePage:homePage,
    userRegister:userRegister,
    userLogin:userLogin
}