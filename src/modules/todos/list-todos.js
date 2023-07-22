const List = require("./Todo");

const listTodos = async ({ todo, q, page = { limit: 2, offset: 0 } }) => {
  const filter = {};

  if (q) {
    filter.name = { $regex: new RegExp(q, "i") };
  }

  const result = await List.find({ todo, ...filter })
    .populate([
      {
        path: "list",
      },
    ])
    .skip(page.offset)
    .limit(page.limit);

  return { todo: result, pageInfo: { ...page } };
};

module.exports = listTodos;
