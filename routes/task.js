import express from "express";
import {
  addTask,
  deleteTask,
  getMyTask,
  updateTask,
} from "../routes_controllers/task.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/tasks/new", isAuthenticated, addTask);

router.get("/tasks/mytasks", isAuthenticated, getMyTask);

router
  .route("/tasks/:id")
  .put(isAuthenticated, updateTask)
  .delete(isAuthenticated, deleteTask);

export default router;
