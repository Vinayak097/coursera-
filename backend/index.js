import express from 'express'
import bodyParser from 'body-parser';

import dotenv from 'dotenv'


import AuthRouter from './Routes/userRoutes.js'
import dbConnect from './dbConnect.js';

const app=express();
dotenv.config();
app.use(express.json());
app.use(bodyParser.json());


const port=process.env.PORT || 5000;
app.get('/',(req,res)=>{
    res.send("hello from server")
})

app.use('/user',AuthRouter);
app.listen(port,async()=>{
    await dbConnect();
    console.log("server started");
})