import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { authService } from "./auth.service";
import { generateToken } from "../../utils/jwt";
import config from "../../config";
// import { setAuthCookie } from "../../utils/setCookie";

const createLogIn = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await authService.createLogIn(email, password);

  const tokenPayload = {
    email: user.email,
    role: user.role,
    id: user.id,
  };
  const token = generateToken(
    tokenPayload,
    config.JWT_ACCESS_SECRET,
    config.JWT_ACCESS_EXPIRATION
  );
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User logged in successfully",
    data: {
      token: token,
      user: user,
    },
  });
});

const logOutUser = catchAsync(async (req: Request, res: Response) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User logged out successfully",
    data: null,
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
  logOutUser,
  createLogInGoogle,
};
