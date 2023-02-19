import express from 'express';
import { authUser } from '../middlewares/Auth.js'
import {
    patchComponents, patchAbout, patchEducation, patchSkill, patchExperiance, patchContact,
} from '../controllers/PatchController.js';


export const PatchRouter = express.Router();


PatchRouter.patch('/component', authUser, patchComponents);

PatchRouter.patch('/about', authUser, patchAbout);

PatchRouter.patch('/education', authUser, patchEducation);

PatchRouter.patch('/skill', authUser, patchSkill);

PatchRouter.patch('/experiance', authUser, patchExperiance);

PatchRouter.patch('/contact', authUser, patchContact);