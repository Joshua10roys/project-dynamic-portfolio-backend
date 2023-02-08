import express from "express";
import { MongoClient } from 'mongodb';
var DbUrl = "mongodb://localhost:27017";

export const router = express.Router();

async function checkToken() {

}

router.get('/', async (req, res) => {

    try {
        res.cookie('token', 'value_', { secure: false, httpOnly: true, expires: new Date(Date.now() + (3600000 * 6)) })
        // res.redirect('https://www.google.co.in/')
        res.send()
    } catch (error) {
        console.log(error.message);
    }
})