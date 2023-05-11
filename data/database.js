import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "ToDoList_WithAuth",
    })
    .then((c) => console.log(`Database connected with ${c.connection.host} `))
    .catch((e) => console.log(e));
};
