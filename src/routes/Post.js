import express from 'express';
import { authUser } from '../middlewares/Auth.js';
import {
    postComponents, postAbout, postEducation, postSkill, postExperiance, postContact, postMessage,
} from '../controllers/PostController.js';


export const PostRouter = express.Router();


PostRouter.post('/component', authUser, postComponents);

PostRouter.post('/about', authUser, postAbout);

PostRouter.post('/education', authUser, postEducation);

PostRouter.post('/skill', authUser, postSkill);

PostRouter.post('/experiance', authUser, postExperiance);

PostRouter.post('/contact', authUser, postContact);

PostRouter.post('/message', postMessage);