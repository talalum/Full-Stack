const wsDAL = require("../DAL/todos_wsDAL");

const getUserTenTodos = async (userId) => {
  let userData = {};
  userData.id = userId;
  let resp = await wsDAL.getTodossData();
  let allTodos = resp.data;
  let releventTodos = allTodos.filter((t) => t.userId == userId);
  if (releventTodos) {
    // console.log(releventTodos.length);
    return releventTodos;
  }
};


getUserTenTodos(1);

module.exports = { getUserTenTodos };
