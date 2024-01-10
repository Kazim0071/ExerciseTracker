import express from "express";
import { getUsers, postUsers } from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/add", postUsers);

export default router;
