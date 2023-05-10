import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ToDoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Todo = mongoose.model("Todo", ToDoSchema);
module.exports = Todo;
