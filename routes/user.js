import express from "express";
//import { User } from "../models/user.js";
import {
  register,
  getAllUsers,
  login,
  getMyProfile,
  logout,
} from "../routes_controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/users/me", isAuthenticated, getMyProfile);

router.get("/users/all", getAllUsers);

router.post("/users/new", register);

router.post("/users/login", login);

router.get("/users/logout", logout);

/*router
  .route("/users/:id")
  .get(getUserDetails)
  .put(updateUser)
  .delete(deleteUser);
*/

export default router;
