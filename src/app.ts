import express, { Request, Response } from "express";
import cors from "cors";
import compression from "compression";
import routes from "./routes/routes";
import { globalErrorHandler } from "./middleware/globalErrorHandler";
import notFound from "./middleware/notFound";
import cookieParser from "cookie-parser";
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(compression());
app.use(
  cors({
    origin: [
      "https://mukit-hossen-portfolio.vercel.app",
      "http://localhost:3000",
    ],
    credentials: true,
  })
);
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
