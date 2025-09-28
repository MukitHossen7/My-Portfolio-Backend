import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { authService } from "./auth.service";

const createLogIn = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await authService.createLogIn(email, password);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User logged in successfully",
    data: user,
  });
});

const createLogInGoogle = catchAsync(async (req: Request, res: Response) => {
  const user = await authService.createLogInGoogle(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Google login successfully",
    data: user,
  });
});

export const authController = {
  createLogIn,
  createLogInGoogle,
};
