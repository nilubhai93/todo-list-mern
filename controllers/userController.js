const userModel = require("../models/userModel");
const bcrypt = require("bcrypt")
const JWT = require("jsonwebtoken")

// sign up
const registerController = async (req, res) => {

    try {
        const { username, email, password } = req.body;
        // validation
        if (!username || !email || !password) {
            return res.status(500).send({
                success: false,
                message: "Please enter all fields.."
            })
        }

        // check existing user
        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            return res.status(500).send({
                success: false,
                message: "user already exits"
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // save user
        const newUser = new userModel({ username, email, password: hashedPassword })
        await newUser.save()

        res.status(201).send({
            success: true,
            message: "user register successfully"
        })

    } catch (error) {
        console.log(error).send({
            success: false,
            message: "Register API",
            error
        })
    }
}



// log in
const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // find user
        const user = await userModel.findOne({ email })

        // validation
        if (!user || !password) {
            return res.status(404).send({
                success: false,
                message: "enter email or password"
            })
        }

        // match password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(500).send({
                success: false,
                message: "invalid candidate"
            });
        }

        // token
        const token = await JWT.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1d" })

        // success
        res.status(200).send({
            success: true,
            message: "log in successfully",
            token,
            user
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "login api",
            error
        })
    }
}

module.exports = { registerController, loginController };

