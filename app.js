import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { connectDB } from "./data/database.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
config({
  path: "./data/config.env",
});
//const router = express.Router();
/*Connecting and Configuring the Database*/

//Middlewares
app.use(express.json());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser()); //For req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(userRouter);
app.use(taskRouter);

app.get("/", (req, res) => {
  res.send("Nice working");
});

// req.query gives params
connectDB();
/*Database part ends here*/

app.use(errorMiddleware);

app.listen(4000, () => {
  console.log(
    `Server running at port ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});
