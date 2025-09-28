import dotenv from "dotenv";
dotenv.config();

export default {
  PORT: process.env.PORT as string,
  NODE_ENV: process.env.NODE_ENV as string,
  ADMIN_EMAIL: process.env.ADMIN_EMAIL as string,
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD as string,
  BCRYPT_SALT_ROUNDS: process.env.BCRYPT_SALT_ROUNDS as string,
};
