import mongoose from "mongoose";

const dbConnect=async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/courses-site');    
    }catch(error){
        console.log("mongo failed to connect");
    }
}
export default dbConnect;