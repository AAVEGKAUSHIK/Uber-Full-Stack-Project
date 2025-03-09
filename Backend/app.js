import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectTodb from "./DB/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./Routes/user.routes.js";
import riderRoutes from "./Routes/rider.routes.js";

const app = express();

connectTodb();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello World");
});
app.use("/user", userRoutes);
app.use("/rider", riderRoutes);


export default app;