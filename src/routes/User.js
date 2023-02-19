import express from 'express';
import { create, login, deleteUser } from '../controllers/UserController.js';
import { authUser, checkToken } from '../middlewares/Auth.js';


export const UserRouter = express.Router();


UserRouter.get('/checkToken', checkToken);

UserRouter.post('/create', authUser, create);

UserRouter.post('/login', login);

UserRouter.delete('/delete', authUser, deleteUser);