import express from "express";
import { userController } from "./user.controller";
import { zodValidateRequest } from "../../middleware/zodValidateRequest";
import { createUserZodSchema } from "./user.zod.validation";

const userRoute = express.Router();

userRoute.post(
  "/register",
  zodValidateRequest(createUserZodSchema),
  userController.createUser
);

export default userRoute;
