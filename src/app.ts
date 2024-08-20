import express, { Application, Request, Response } from "express";
import cors from "cors";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import NotFound from "./app/middlewares/notFound";
import router from "./app/routes";


const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());


// application dynamic routes
app.use("/api/v1", router);


// test route
app.get("/", (req: Request, res: Response) => {
  res.send("Server running");
});

// global error handler
app.use(globalErrorHandler);

// not found route
app.use(NotFound);

export default app;
