const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    name: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    list: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "List",
    },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Todo = mongoose.model("Todos", todoSchema);

module.exports = Todo;
