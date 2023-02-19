import Component from '../models/ComponentSchema.js';
import About from '../models/AboutSchema.js';
import Education from '../models/EducationSchema.js';
import Skill from '../models/SkillSchema.js';
import Experiance from '../models/ExperianceSchema.js';
import Contact from '../models/ContactShema.js';
import Message from '../models/MessageSchema.js';


const postComponents = async (req, res) => {

    try {
        await Component.create(req.body);
        res.status(200).send({ status: 200, msg: 'components created' });
    } catch (error) {
        res.status(500).send({ status: 500, msg: "Something Went Wrong" })
        console.log(error.message);
    }
}

const postAbout = async (req, res) => {

    try {
        await About.create(req.body);
        res.status(201).send({ status: 201, msg: "About Content Saved" })
    } catch (error) {
        res.status(500).send({ status: 500, msg: "Something Went Wrong" })
        console.log(error.message);
    }
}

const postEducation = async (req, res) => {

    try {
        await Education.create(req.body)
        res.status(201).send({ status: 201, msg: "Education Details Saved" })
    } catch (error) {
        res.status(500).send({ status: 500, msg: "Something Went Wrong" })
        console.log(error.message);
    }
}

const postSkill = async (req, res) => {

    try {
        await Skill.create(req.body)
        res.status(201).send({ status: 201, msg: "Skill Details Saved" })
    } catch (error) {
        res.status(500).send({ status: 500, msg: "Something Went Wrong" })
        console.log(error.message);
    }
}

const postExperiance = async (req, res) => {

    try {
        await Experiance.create(req.body)
        res.status(201).send({ status: 201, msg: "Experiance Details Saved" })
    } catch (error) {
        res.status(500).send({ status: 500, msg: "Something Went Wrong" })
        console.log(error.message);
    }
}

const postContact = async (req, res) => {

    try {

        await Contact.create(req.body)
        res.status(201).send({ status: 201, msg: "Contact Details Saved" })
    } catch (error) {
        res.status(500).send({ status: 500, msg: "Something Went Wrong" })
        console.log(error.message);
    }
}

const postMessage = async (req, res) => {

    try {
        await Message.create(req.body)
        res.status(201).send({ status: 201, msg: "Message Saved in DB" })
    } catch (error) {
        res.status(500).send({ status: 500, msg: "Something Went Wrong" })
        console.log(error.message);
    }
}


export { postComponents, postAbout, postEducation, postSkill, postExperiance, postContact, postMessage };