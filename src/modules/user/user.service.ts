import { Prisma } from "@prisma/client";

const createUser = async (payload: Prisma.UserCreateInput): Promise<void> => {
  return;
};

export const userServices = {
  createUser,
};
