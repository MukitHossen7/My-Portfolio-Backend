import { Prisma, User } from "@prisma/client";
import { prisma } from "../../config/db";
import AppError from "../../errorHelpers/AppError";
import httpStatus from "http-status-codes";
import bcrypt from "bcrypt";
import config from "../../config";

const createUser = async (payload: Prisma.UserCreateInput): Promise<User> => {
  const { email, password, ...rest } = payload;
  const isUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (isUser) {
    throw new AppError(httpStatus.BAD_REQUEST, "User Already Exist");
  }

  const hashPassword = await bcrypt.hash(
    password as string,
    Number(config.BCRYPT_SALT_ROUNDS)
  );

  const user = await prisma.user.create({
    data: {
      email,
      password: hashPassword,
      provider: "credentials",
      providerId: email,
      ...rest,
    },
  });
  return user;
};

const getAllUsers = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      provider: true,
      providerId: true,
      isStatus: true,
      isDeleted: true,
      isVerified: true,
      createdAt: true,
      updatedAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return users;
};

const getUserById = async (id: number) => {
  const user = await prisma.user.findUnique({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      provider: true,
      providerId: true,
      isStatus: true,
      isDeleted: true,
      isVerified: true,
      createdAt: true,
      updatedAt: true,
    },
    where: {
      id: id,
    },
  });
  return user;
};

export const userServices = {
  createUser,
  getAllUsers,
  getUserById,
};
