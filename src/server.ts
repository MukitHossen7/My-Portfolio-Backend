import dotenv from "dotenv";
import { Server } from "http";
import { prisma } from "./config/db";
import app from "./app";

dotenv.config();

let server: Server;

const startServer = async () => {
  try {
    await prisma.$connect();
    console.log("✅ Connected to the database successfully.");
    server = app.listen(process.env.PORT, () => {
      console.log(
        `🚀 Server is running on http://localhost: ${process.env.PORT}`
      );
    });
  } catch (error) {
    console.log("❌ Database connection failed:", error);
    process.exit(1);
  }
};

startServer();

//Server error handle
process.on("unhandledRejection", (err) => {
  console.log("unHandle rejection detected... Server shutting down... ", err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on("uncaughtException", (err) => {
  console.log("un caught exception detected... Server shutting down... ", err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on("SIGTERM", () => {
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
