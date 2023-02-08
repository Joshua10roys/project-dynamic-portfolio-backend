import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import { UserRouter } from './src/routes/User.js';
import { GetRouter } from './src/routes/Get.js';
import { PostRouter } from './src/routes/Post.js';
import { PatchRouter } from './src/routes/Patch.js';

const app = express();

app.use(cors({
    // origin: "http://localhost:3000",
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

dotenv.config();

app.use('/user', UserRouter);
app.use('/get', GetRouter);
app.use('/post', PostRouter);
app.use('/patch', PatchRouter);


await mongoose.connect(process.env.MONGOBD)
    .then(() => console.log("Connected to MongoDB"))
    .then(() => app.listen(4000))
    .then(() => console.log("Server Started"))
    .catch((error) => console.log(error.message))