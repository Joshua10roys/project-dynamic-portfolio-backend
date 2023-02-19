import Component from '../models/ComponentSchema.js';
import About from '../models/AboutSchema.js';
import Education from '../models/EducationSchema.js';
import Skill from '../models/SkillSchema.js';
import Experiance from '../models/ExperianceSchema.js';
import Contact from '../models/ContactShema.js';


const patchComponents = async (req, res) => {

    try {
        let { _id } = req.body;
        await Component.findByIdAndUpdate(_id, req.body);
        res.status(200).send({ status: 200, msg: 'components Updated' });
    } catch (error) {
        res.status(500).send({ status: 500, msg: "Something Went Wrong" })
        console.log(error.message);
    }
}

const patchAbout = async (req, res) => {

    try {
        let { _id } = req.body;
        await About.findByIdAndUpdate(_id, req.body);
        res.status(200).send({ status: 200, msg: "About Content Updated" })
    } catch (error) {
        res.status(500).send({ status: 500, msg: "Something Went Wrong" })
        console.log(error.message);
    }
}

const patchEducation = async (req, res) => {

    try {
        await Education.findByIdAndUpdate(req.body._id, req.body)
        res.status(200).send({ status: 200, msg: "Education Details Updated" })
    } catch (error) {
        res.status(500).send({ status: 500, msg: "Something Went Wrong" })
        console.log(error.message);
    }
}

const patchSkill = async (req, res) => {

    try {
        await Skill.findByIdAndUpdate(req.body._id, req.body)
        res.status(201).send({ status: 201, msg: "Skill Details Updated" })
    } catch (error) {
        res.status(500).send({ status: 500, msg: "Something Went Wrong" })
        console.log(error.message);
    }
}

const patchExperiance = async (req, res) => {

    try {
        await Experiance.findByIdAndUpdate(req.body._id, req.body)
        res.status(201).send({ status: 201, msg: "Experiance Details Updated" })
    } catch (error) {
        res.status(500).send({ status: 500, msg: "Something Went Wrong" })
        console.log(error.message);
    }
}

const patchContact = async (req, res) => {

    try {

        await Contact.findByIdAndUpdate(req.body._id, req.body);
        res.status(201).send({ status: 201, msg: "Contact Details Updated" })
    } catch (error) {
        res.status(500).send({ status: 500, msg: "Something Went Wrong" })
        console.log(error.message);
    }
}


export { patchComponents, patchAbout, patchEducation, patchSkill, patchExperiance, patchContact };