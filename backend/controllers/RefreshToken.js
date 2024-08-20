import Users from "../models/UserModel.js";
import jwt from "jsonwebtoken";

export const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.sendStatus(401);

        const user = await Users.findOne({
            where: { refresh_token: refreshToken }
        });

        if (!user) return res.sendStatus(403);

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if (err) return res.sendStatus(403);

            const { userId, name, email, description } = user; // Ensure description is included
            const accessToken = jwt.sign({ userId, name, email, description }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '15s'
            });

            res.json({ accessToken });
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "An error occurred during token refresh" });
    }
};
