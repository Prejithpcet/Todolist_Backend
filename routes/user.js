import express from "express";
//import { User } from "../models/user.js";
import { addNewUser, getAllUsers } from "../routes_controllers/user.js";

const router = express.Router();

router.get("/users/all", getAllUsers);

router.post("/users/new", addNewUser);

/*router
  .route("/users/:id")
  .get(getUserDetails)
  .put(updateUser)
  .delete(deleteUser);
*/

export default router;
