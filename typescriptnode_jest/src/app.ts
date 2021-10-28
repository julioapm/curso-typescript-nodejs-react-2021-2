import express from "express";
import { router as conversorRouter } from "./routes/conversor.routes";

const app = express();
app.set("port", process.env.PORT || 3000);
app.use("/api", conversorRouter);
export default app;
