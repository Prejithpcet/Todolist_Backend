import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import ErrorHandler from "./error.js";

export const isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies; //get token from cookies only if logged in
    if (!token) return next(new ErrorHandler("Login First", 404));

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded._id); //req.user stores the result of the findById operation in DB
    next();
  } catch (error) {
    next(error);
  }
};
