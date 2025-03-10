import {Router} from 'express'
import { body } from 'express-validator'
import { loginRider, logoutRider, registerRider } from '../Controller/rider.controller.js'
const Routes = Router()

Routes.post("/register", [
    body("fullname.firstname").isLength({min: 3}).withMessage("Name is atleast 3 characters long"),
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({ min: 8 }).withMessage("Password must be 8 character long"),
    body("vehicle.color").isLength({min: 3}).withMessage("Invalid Color"),
    body("vehicle.plate").isLength({min: 8}).withMessage("Invalid Vehicle Plate"),
    body("vehicle.vehicleType").isIn("Car, Motorcycle, Auto").withMessage("Invalid Vehicle Type"),
    body("vehicle.capacity").isDecimal({min: 1}).withMessage("Invalid Vehicle capacity")
], registerRider)

Routes.post("/login", [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({ min: 8 }).withMessage("Password must be 8 character long")
], loginRider)

Routes.post("/logout", logoutRider)

export default Routes