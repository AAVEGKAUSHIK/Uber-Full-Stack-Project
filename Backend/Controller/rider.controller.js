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

    const token = Rider.generateAuthToken()

    res.status(200).json({token, Rider})
}