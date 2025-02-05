import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js'
dotenv.config();
console.log(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('connected to MongoDB');
}).catch((err)=>{
    console.log(err);
})


const app=express();
app.use(express.json());

app.listen(3000, ()=>{
    console.log('Server running on port 3000');
});

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes)