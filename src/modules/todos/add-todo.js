const Todo = require("./Todo");
const List = require("../lists/List");

const addTodo = async (data) => {
  const result = await Todo.create(data);

  await List.findByIdAndUpdate(data.list, { $push: { todos: result._id } });

  return result;
};

module.exports = addTodo;
