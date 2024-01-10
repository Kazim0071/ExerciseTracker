import express from "express";
import {
  deleteExercisesById,
  getExercises,
  getExercisesById,
  postExercises,
  postExercisesById,
} from "../controllers/exercises.js";

const router = express.Router();

router.get("/", getExercises);
router.get("/:id", getExercisesById);
router.post("/add", postExercises);
router.post("/update/:id", postExercisesById);
router.delete("/:id", deleteExercisesById);

export default router;
