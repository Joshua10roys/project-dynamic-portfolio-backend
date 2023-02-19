import jwt from 'jsonwebtoken';


export const authUser = async (req, res, next) => {

    try {
        const { token } = req.headers;
        if (!token) {
            res.status(302).send({ status: 302, msg: "Your not Authenticated" })
        } else {
            jwt.verify(token, process.env.PRV_KEY, (error, decode) => {
                if (error) {
                    res.status(401).send({ status: 401, msg: "Your Session Expired" })
                }
                if (decode) {
                    req.headers._id = decode._id;
                    next();
                }
            })
        }
    } catch (error) { console.log(error.message) }
}

export const checkToken = async (req, res) => {

    try {
        jwt.verify(req.headers.token, process.env.PRV_KEY, (error, decode) => {
            if (error) { res.status(401).send() }
            if (decode) { res.status(200).send() }
        })
    } catch (error) {
        console.log(error.message);
    }
}