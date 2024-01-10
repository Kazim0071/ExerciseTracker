import dotenv from "dotenv";
import express from "express";
import cors from "cors";
// import mongoose from "mongoose";
import exercisesRoutes from "./routes/exercises.js";
import usersRoutes from "./routes/users.js";
import ConnectDb from "./config/db.js";

dotenv.config();
const app = express();
const port = 5000 || 8000;

app.use(cors());
app.use(express.json());

ConnectDb();

app.use("/exercises", exercisesRoutes);
app.use("/users", usersRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
