import express, { Request, Response } from "express";
import cors from "cors";
import compression from "compression";
import routes from "./routes/routes";
import { globalErrorHandler } from "./middleware/globalErrorHandler";
import notFound from "./middleware/notFound";
import cookieParser from "cookie-parser";
import config from "./config";
const app = express();

// Middleware
app.use(
  cors({
    origin: [config.FRONTEND_URL],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(compression());
app.use(express.json());
app.set("trust proxy", 1);

//routes
app.use("/api/v1", routes);

app.get("/", (req: Request, res: Response) => {
  res.send({
    success: true,
    message: "Welcome to the My Portfolio Server",
  });
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
