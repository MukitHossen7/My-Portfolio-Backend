import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { userServices } from "./user.service";
import { JwtPayload } from "jsonwebtoken";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const user = await userServices.createUser(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: `Registration Successfully`,
    data: user,
  });
});

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const users = await userServices.getAllUsers();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Retrieve All User Successfully`,
    data: users,
  });
});

const getMe = catchAsync(async (req: Request, res: Response) => {
  const { email } = req.user as JwtPayload;
  const user = await userServices.getMe(email);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Single user retrieve successfully`,
    data: user,
  });
});

export const userController = {
  createUser,
  getAllUsers,
  getMe,
};
