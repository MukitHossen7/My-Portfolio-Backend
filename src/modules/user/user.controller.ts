import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { userServices } from "./user.service";

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

const getUserById = catchAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const user = await userServices.getUserById(id);
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
  getUserById,
};
