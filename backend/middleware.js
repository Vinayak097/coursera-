


const middleware=(req,res,next)=>{
    const token=req.cookies.jwt;
    if(token!=undefined||null){
        const payload=jwt.verify('jwt',token);
        if(payload.success){
            next();
        }
    }else{
        res.status(403).json({message:"unAuthroized act"})
    }
}