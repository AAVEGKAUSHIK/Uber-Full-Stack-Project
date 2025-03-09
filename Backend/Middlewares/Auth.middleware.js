import jwt from "jsonwebtoken";
import userModel from "../Models/user.model.js";

export const authUser = async (req, res, next) => {
    const token = req.cookies.token
    if (!token) return res.status(401).json({ message: 'Unauthorized User' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await userModel.findOne({ _id: decoded._id });
        if (!user) return res.status(401).json({ message: 'User Not Found'});

        req.user = user;

        next()
        
    } catch (error) {
        return res.status(400).json({Message: 'Invalid token', error });
    }
}