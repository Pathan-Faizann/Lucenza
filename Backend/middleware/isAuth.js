 export async function isLogin(req,res,next) {
    console.log("Session :",req.session);
    
   if(!req.session.user){
    return res.status(401).json({success:false,message:"Login First!"})
   }
   res.json({success:true})
   next();
    
 }