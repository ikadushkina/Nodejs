const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")

async function getUsers(req, res) {
    User.find({}).then(user => {
        res.status(200).json({ user });
    })

}
async function addUser(req, res) {
    const { login } = req.body
    const  { password }  = req.body
    const pass = bcrypt.hashSync(password, 10)
    const  date  = new Date();
    const user = new User({
        login,
        password: pass,
        date: date
    })
    await user.save();
    User.find({}).then(user => {
        res.status(200).json({ user });
    })
}
const jwtKey = "very_very_secret";
const jwtExpirySeconds = 60;


async function loginUser(req, res) {
    try {
        const {login, password} = req.body
        console.log({login, password})
        const user = await User.findOne({login});
        console.log("user", user)

        if (!user || !user.comparePassword(password)) {
            res.status(401).json({message: 'Wrong username or password!'})
            console.log('ERROR');
        } else {
            res.status(200)
            const token = jwt.sign({login}, jwtKey, {
                algorithm: "HS256",
                expiresIn: jwtExpirySeconds,
            })
            console.log("token:", token)
            res.cookie("token", token, {maxAge: jwtExpirySeconds * 1000});
            res.end()
        }
    } catch (err) {
        console.log("ERR", err)
        res.status(401).json({message: 'Error request'})
        res.end()
    }

}

const verification = (req, res,next) => {
    console.log("\n\n\n\n\nreq.cookies",req.cookies)
    const token = req.cookies ? req.cookies.token||null:null
    if (!token) {
        return res.status(401).end()
    }
    next()
    // try {
    //     return res.status(200)
    // } catch (e) {
    //     if (e instanceof jwt.JsonWebTokenError) {
    //         return res.status(401).end()
    //     }
    //     return res.status(400).end()
    // }
}


module.exports = {
    addUser,
    loginUser,
    getUsers,
    verification
}