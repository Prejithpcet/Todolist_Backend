import express from "express";
import userRouter from "./routes/user.js";
import { connectDB } from "./data/database.js";
import { config } from "dotenv";

const app = express();
config({
  path: "./data/config.env",
});
//const router = express.Router();
/*Connecting and Configuring the Database*/

//Middlewares
app.use(express.json()); //For req.body
app.use(userRouter);
// req.query gives params
connectDB();
/*Database part ends here*/

app.listen(4000, () => {
  console.log("Server running at port 4000");
});
