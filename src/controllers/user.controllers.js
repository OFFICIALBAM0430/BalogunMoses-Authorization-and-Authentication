const User = require("../models/user.models");

const signUp = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ message: "All Fields Required" })
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User Already Exist" });
        }
        const newUser = await User.create({ firstName, lastName, email, password });
        return res.status(201).json({ message: "User Created Successfully", user: newUser })
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Internal Server Error" });
    };
};

const Login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({ message: "All Fields are required" });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        if (user.password != password) {
            return res.status(400).json({ message: "Invalid Password" });
        }
        return res.status(200).json({ message: "User logged in Successfully", user });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Internal Server Error" });
    };
};

module.exports = { signUp, Login };