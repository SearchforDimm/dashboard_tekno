import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll({
            attributes: ['id', 'name', 'email', 'description']
        });

        res.json(users)
    } catch (error) {
        console.log(error)
    }
}
export const Register = async (req, res) => {
    const { name, email, password, confPassword, description } = req.body;

    if (password !== confPassword) return res.status(400).json({ msg: "Password and Confirm Password do not match" });

    try {
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);

        await Users.create({
            name: name,
            email: email,
            description: description,
            password: hashPassword,
        });

        res.json({ msg: "Register Success" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Registration failed" });
    }
};
export const Login = async (req, res) => {
    try {
        const user = await Users.findOne({
            where: { email: req.body.email }
        });

        if (!user) return res.status(404).json({ msg: "Email not found" });

        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) return res.status(400).json({ msg: "Wrong Password" });

        console.log("User data:", user); // Debugging

        const { id, name, email, description } = user;

        const accessToken = jwt.sign({ userId: id, name, email, description }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '20s'
        });
        const refreshToken = jwt.sign({ userId: id, name, email, description }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        });

        await Users.update({ refresh_token: refreshToken }, { where: { id } });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        });

        res.json({ accessToken });

    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ msg: "An error occurred during login" });
    }
};



export const Logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);
    const user = await Users.findAll({
        where: {
            refresh_token: refreshToken
        }
    })
    if (!user[0]) return res.sendStatus(403);
    const userId = user[0].id;
    await Users.update({refreshToken: null}, {
        where: {
            id: userId
        }
    })

    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}