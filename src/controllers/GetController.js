import Component from '../models/ComponentSchema.js';
import About from '../models/AboutSchema.js';
import Education from '../models/EducationSchema.js';
import Skill from '../models/SkillSchema.js';
import Experiance from '../models/ExperianceSchema.js';
import Contact from '../models/ContactShema.js';
import Message from '../models/MessageSchema.js';


const getData = async (req, res) => {

    try {

        let component = await Component.find();
        let about = await About.find();
        let education = await Education.find();
        let skill = await Skill.find();
        let experiance = await Experiance.find();
        let contact = await Contact.find();

        let data = {
            component: component,
            about: about,
            education: education,
            skill: skill,
            experiance: experiance,
            contact: contact
        };

        res.status(200).send({ msg: "Data Sent", data: data });

    } catch (error) {
        res.status(500).send({ status: 500, msg: "Something went wrong" });
        console.log(error.message);
    }
}

const getAllData = async (req, res) => {

    try {

        let component = await Component.find();
        let about = await About.find();
        let education = await Education.find();
        let skill = await Skill.find();
        let experiance = await Experiance.find();
        let contact = await Contact.find();
        let message = await Message.find();

        let data = {
            component: component,
            about: about,
            education: education,
            skill: skill,
            experiance: experiance,
            contact: contact,
            message: message
        };

        res.status(200).send({ msg: "Data Sent", data: data });

    } catch (error) {
        res.status(500).send({ status: 500, msg: "Something went wrong" });;
        console.log(error.message)
    }
}


export { getData, getAllData };