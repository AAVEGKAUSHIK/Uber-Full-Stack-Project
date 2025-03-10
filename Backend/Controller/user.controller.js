import userModel from "../Models/user.model.js";
import { validationResult } from "express-validator";
import userService from "../Service/user.service.js";


export const registerUser = async (req, res) => {
    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    
    const { fullname, email, password } = req.body;

    const isUserAlreadyExists = await userModel.findOne({email});

    if(isUserAlreadyExists){
        return res.status(400).json({ errors: [{ message: "User already exists" }] });
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });

    const token = user.generateAuthToken();

    res.status(201).json({ token, user });
};

export const loginUser = async(req, res) => {

    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;

    const user = await userModel.findOne({email}).select('+password');
    if(!user){
        return res.status(400).json({ errors: [{ message: "User not found" }]
    })}

    const isPasswordMatch = user.comparePassword(password)
    if (!isPasswordMatch) {
        return res.status(400).json({ errors: [{ message: "Invalid password" }] });
    }

    const token = user.generateAuthToken();
    res.cookie("token", token)
    res.status(200).json({ token, user });
}

export const logout = async(req, res) => {
    res.clearCookie("token");
    res.status(200).json({ message: "Logged out successfully" });
}

export const getUserProfile = async(req, res) => {
    res.status(200).json(req.user)
}