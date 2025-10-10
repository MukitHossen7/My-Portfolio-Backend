import express from "express";
import { userController } from "./user.controller";
import { zodValidateRequest } from "../../middleware/zodValidateRequest";
import { createUserZodSchema } from "./user.zod.validation";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "@prisma/client";

const userRoute = express.Router();

userRoute.post(
  "/register",
  zodValidateRequest(createUserZodSchema),
  userController.createUser
);

userRoute.get("/", userController.getAllUsers);
userRoute.get("/me", checkAuth(Role.ADMIN), userController.getMe);

export default userRoute;
