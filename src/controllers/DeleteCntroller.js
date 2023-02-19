import Education from '../models/EducationSchema.js';
import Skill from '../models/SkillSchema.js';
import Experiance from '../models/ExperianceSchema.js';
import Contact from '../models/ContactShema.js';
import Message from '../models/MessageSchema.js';


const deleteEducation = async (req, res) => {

    try {
        let _id = req.params["_id"]
        await Education.findByIdAndDelete(_id)
        res.status(202).send({ status: 202, msg: "Document Deleted Successfully" })
    } catch (error) {
        res.status(500).send({ status: 500, msg: "Something went wrong" })
        console.log(error.message)
    }
}

const deleteSkill = async (req, res) => {

    try {
        let _id = req.params["_id"]
        await Skill.findByIdAndDelete(_id)
        res.status(202).send({ status: 202, msg: "Document Deleted Successfully" })
    } catch (error) {
        res.status(500).send({ status: 500, msg: "Something went wrong" })
        console.log(error.message)
    }
}

const deleteExperiance = async (req, res) => {

    try {
        let _id = req.params["_id"]
        await Experiance.findByIdAndDelete(_id)
        res.status(202).send({ status: 202, msg: "Document Deleted Successfully" })
    } catch (error) {
        res.status(500).send({ status: 500, msg: "Something went wrong" })
        console.log(error.message)
    }
}

const deleteContact = async (req, res) => {

    try {
        let _id = req.params["_id"]
        await Contact.findByIdAndDelete(_id)
        res.status(202).send({ status: 202, msg: "Document Deleted Successfully" })
    } catch (error) {
        res.status(500).send({ status: 500, msg: "Something went wrong" })
        console.log(error.message)
    }
}

const deleteMessage = async (req, res) => {

    try {
        let _id = req.params["_id"]
        await Message.findByIdAndDelete(_id)
        res.status(202).send({ status: 202, msg: "Document Deleted Successfully" })
    } catch (error) {
        res.status(500).send({ status: 500, msg: "Something went wrong" })
        console.log(error.message)
    }
}


export { deleteEducation, deleteSkill, deleteExperiance, deleteContact, deleteMessage };