import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js'
import cors from 'cors';
dotenv.config();
console.log(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('connected to MongoDB');
}).catch((err)=>{
    console.log(err);
})


const app=express();
app.use(express.json());
app.use(cors());

app.listen(3000, ()=>{
    console.log('Server running on port 3000');
});

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);

app.use((err,req,res,next) =>{
    const statusCode=err.statusCode || 500;
    const message=err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode,
    })
});