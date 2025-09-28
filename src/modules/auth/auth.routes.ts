import express from "express";
import { authController } from "./auth.controller";

const authRouter = express.Router();

authRouter.post("/login", authController.createLogIn);

export default authRouter;
