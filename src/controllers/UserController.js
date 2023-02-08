import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

import User from '../models/UserSchema.js';


const create = async (req, res) => {

    const { username, password } = req.body;

    try {

        const userFromDB = await User.findOne({ username });
        if (userFromDB) {

            res.status(409).send({ status: 409, msg: 'User name already exist' });
        } else {

            let salt = await bcrypt.genSalt(5);
            const hashPassword = await bcrypt.hash(password, salt);
            await User.create({
                username: username,
                password: hashPassword
            });
            res.status(201).send({ status: 201, msg: 'New user Created Successfully' });
        }
    } catch (error) {

        res.status(400).send({ status: 400, msg: 'Something went wrong' });
        console.log(error.message);
    }

}

const login = async (req, res) => {

    const { username, password } = req.body;
    console.log(req.body);

    try {

        const userFromDB = await User.findOne({ username });
        if (!userFromDB) {

            res.status(401).send({ status: 401, msg: "Invalid Credentials" })
        } else {

            const storedPassword = userFromDB.password;
            const isPasswordMatch = await bcrypt.compare(password, storedPassword);

            if (isPasswordMatch) {

                const token = jwt.sign({ _id: userFromDB._id }, process.env.PRV_KEY);
                res
                    .status(201)
                    .cookie("token", token, {
                        httpOnly: true,
                        secure: true,
                    })
                    .send({
                        status: 201,
                        msg: "User login successful",
                        token: token,
                        username: username
                    });

            } else {

                res.status(401).send({ status: 401, msg: "Invalid Credentials" })
            }
        }
    } catch (error) {

        res.status(400).send({ status: 400, msg: 'Something went wrong' });
        console.log(error.message);
    }
}

const login0 = async (req, res) => {

    // console.log(req.headers);


    // const token = jwt.sign({ _id: "asdfghjkl" }, process.env.PRV_KEY);
    // res
    //     .status(201)
    //     .cookie("token", token, {
    //         httpOnly: true,
    //         // secure: true,
    //         // signed: true
    //     })
    //     // res.json({
    //     //     msg: "User login successful",
    //     // })
    //     .send({
    //         status: 201,
    //         msg: "User login successful",
    //         token: token,
    //     });


}

export { create, login, login0 };