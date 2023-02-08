import express from 'express';
import { create, login, login0 } from '../controllers/UserController.js';


export const UserRouter = express.Router();

UserRouter.post('/create', create)

UserRouter.post('/login', login)

UserRouter.get('/coo', login0)