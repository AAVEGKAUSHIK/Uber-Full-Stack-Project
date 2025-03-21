import RiderModel from "../Models/rider.model.js";
import {validationResult} from 'express-validator'
import CreateRider from '../Service/rider.service.js'

export const registerRider = async (req, res) => {

    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;

    if(!fullname || !email || !password || !vehicle) {
        return res.status(400).json({ message: "Please fill in all fields" });
    }

    const isRiderAlreadyExists = await RiderModel.findOne({email});

    if(isRiderAlreadyExists){
        return res.status(400).json({message: "Rider already exists"});
    }
    
    const hashedPassword = await RiderModel.hashPassword(password)

    const Rider = await CreateRider({
        firstname: fullname.firstname,
        lastname: fullname.lastname, 
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    })
    await Rider.save();

    const token = await Rider.generateAuthToken()

    res.status(200).json({token, Rider})
}

export const loginRider = async (req, res) => {

    const errors = validationResult(req);
        
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;

    if(!email || !password) {
        return res.status(400).json({message: "Please fill required fields"})
    }
    const Rider = await RiderModel.findOne({email}).select("+password")

    if(!Rider) {
        return res.status(400).json({message: "Rider doesn't exist"})
    }

    const isPasswordMatch = await Rider.comparePassword(password)

    if(!isPasswordMatch) {
        return res.status(400).json({message: "Invalid Email or Password"})
    }

    const token = Rider.generateAuthToken();

    res.cookie("Token", token);
    res.status(200).json({token, Rider})
}

export const logoutRider = async (req, res) => {
    res.clearCookie("Token");
    res.status(200).json({ message: "Rider Logged out successfully" });
}

export const getRiderProfile = async (req, res)  => {
        res.status(200).json(req.rider);
}