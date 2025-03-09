import {Router} from 'express'
import { body } from 'express-validator'
import { registerRider } from '../Controller/rider.controller.js'
const Routes = Router()

Routes.post("/register", [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({ min: 8 }).withMessage("Password must be 8 character long"),
    body("vehicle.color").isLength({min: 3}).withMessage("Invalid Color"),
    body("vehicle.plate").isLength({min: 8}).withMessage("Invalid Vehicle Plate"),
    body("vehicle.vehicleType").isIn("Car, Motorcycle, auto").withMessage("Invalid Vehicle Type"),
    body("vehicle.capacity").isDecimal({min: 1}).withMessage("Invalid Vehicle capacity")
], registerRider)

export default Routes