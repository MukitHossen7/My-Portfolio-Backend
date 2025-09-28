import express, { Request, Response } from "express";
import cors from "cors";
import compression from "compression";
import routes from "./routes/routes";
import { globalErrorHandler } from "./middleware/globalErrorHandler";
import notFound from "./middleware/notFound";
const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(compression());
app.use(express.json());

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
