import express from 'express';
import { authUser } from '../middlewares/Auth.js';
import { getData, getAllData } from '../controllers/GetController.js';


export const GetRouter = express.Router();


GetRouter.get('/getData', getData);

GetRouter.get('/getAllData', authUser, getAllData);