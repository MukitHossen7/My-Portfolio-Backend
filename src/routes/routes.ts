import { Router } from "express";
import userRoute from "../modules/user/user.routes";
import authRouter from "../modules/auth/auth.routes";

const routes = Router();

routes.use("/users", userRoute);
routes.use("/auth", authRouter);

export default routes;
