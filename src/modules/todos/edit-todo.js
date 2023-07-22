const { NotFoundError } = require("../../shared/errors");
const List = require("./Todo");

const editTodo = async ({ id, list, ...changes }) => {
  const existing = await List.findOne({ _id: id, list });

  if (!existing) {
    throw new NotFoundError("Todo topilmadi.");
  }

  return List.findByIdAndUpdate(id, changes, { new: true });
};

module.exports = editTodo;
