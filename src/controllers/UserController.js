import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/UserSchema.js';


const create = async (req, res) => {

    try {
        const { username, password } = req.body;

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

    try {
        const { username, password } = req.body;

        const userFromDB = await User.findOne({ username });
        if (!userFromDB) {

            res.status(401).send({ status: 401, msg: "Invalid Credentials" })
        } else {

            const storedPassword = userFromDB.password;
            const isPasswordMatch = await bcrypt.compare(password, storedPassword);

            if (isPasswordMatch) {

                const token = jwt.sign({ _id: userFromDB._id }, process.env.PRV_KEY, { expiresIn: "2h" });
                res.status(201).send({ status: 201, msg: "User login successful", token: token, username: username });
            } else {

                res.status(401).send({ status: 401, msg: "Invalid Credentials" })
            }
        }
    } catch (error) {

        res.status(400).send({ status: 400, msg: 'Something went wrong' });
        console.log(error.message);
    }
}

const deleteUser = async (req, res) => {

    try {
        const { username } = req.body
        let userFromDB = await User.findOne({ username });

        if (!userFromDB) {
            res.status(404).send({ status: 404, msg: "User not Exists" })
        } else {
            await User.deleteOne({ username });
            res.status(200).send({ status: 200, msg: "User Deleted Successfully" })
        }
    } catch (error) {
        console.log(error.message);
    }
}


export { create, login, deleteUser };