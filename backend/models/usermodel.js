import { Double } from 'bson';
import mongoose, { mongo } from 'mongoose'
import { number } from 'zod';




const userSchema=new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    purchase:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Purchase'
    }]

})
const courseScheam=new mongoose.Schema({
    name:String,
    price:Number,
    maxPrice:Number
})

export const User= mongoose.model('user',userSchema);
export const Purchase=mongoose.model('courses',courseScheam);



