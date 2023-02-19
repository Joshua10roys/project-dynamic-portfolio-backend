import express from 'express';
import { authUser } from '../middlewares/Auth.js';
import {
    deleteEducation, deleteSkill, deleteExperiance, deleteContact, deleteMessage,
} from '../controllers/DeleteCntroller.js';


export const DeleteRouter = express.Router();


DeleteRouter.delete('/education/:_id', authUser, deleteEducation);

DeleteRouter.delete('/skill/:_id', authUser, deleteSkill);

DeleteRouter.delete('/experiance/:_id', authUser, deleteExperiance);

DeleteRouter.delete('/contact/:_id', authUser, deleteContact);

DeleteRouter.delete('/message/:_id', authUser, deleteMessage);