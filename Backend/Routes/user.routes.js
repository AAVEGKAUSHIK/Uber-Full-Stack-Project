import { Router } from "express";
import {body} from "express-validator";
import {registerUser, loginUser, logout, getUserProfile} from "../Controller/user.controller.js";
import {authUser} from "../Middlewares/Auth.middleware.js";
const routes = Router();

routes.post("/register", [
    body('fullname.firstname').isLength({min: 3}).withMessage("Name should be atleast 3 characters long"),
    body('email').isEmail().withMessage("Email is not valid"),
    body('password').isLength({min: 2}).withMessage("Password should be atleast 2 characters long")
],
    registerUser
)

routes.post('/login', [
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min: 3}).withMessage("Password should be atleast 3 characters long")
], loginUser)

routes.post('/logout', logout)

routes.get('/user-profile', authUser, getUserProfile)

export default routes;