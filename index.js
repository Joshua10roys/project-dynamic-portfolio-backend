import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { UserRouter } from './src/routes/User.js';
import { GetRouter } from './src/routes/Get.js';
import { PostRouter } from './src/routes/Post.js';
import { PatchRouter } from './src/routes/Patch.js';
import { DeleteRouter } from './src/routes/delete.js';


const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
dotenv.config();


app.use('/user', UserRouter);
app.use('/get', GetRouter);
app.use('/post', PostRouter);
app.use('/patch', PatchRouter);
app.use('/delete', DeleteRouter);


mongoose.set('strictQuery', true);
await mongoose.connect(process.env.MONGOBD)
    .then(() => console.log("Connected to MongoDB"))
    .then(() => app.listen(4000))
    .then(() => console.log("Server Started"))
    .catch((error) => console.log(error.message))