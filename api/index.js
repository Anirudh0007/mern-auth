import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
console.log(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('connected to MongoDB');
}).catch((err)=>{
    console.log(err);
})


const app=express();

app.listen(3000, ()=>{
    console.log('Server running on port 3000');
});

