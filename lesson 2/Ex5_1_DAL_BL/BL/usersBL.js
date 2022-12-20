const users_wsDAL = require("../DAL/users_wsDAL");
const todos_wsDAL = require("../DAL/todos_wsDAL");
const fileDAL = require("../DAL/jsonFileDAL");

const getAllUserData = async (user_name) => {
  userData = {};
  let resp = await users_wsDAL.getUsersData();
  let allUsers = resp.data;

  resp = await todos_wsDAL.getTodossData();
  let allTodos = resp.data;

  resp = await fileDAL.getUsersData();
  let allfiledata = resp.users;

  let user = allUsers.find((u) => u.username == user_name);
  if (user) {
    userData.email = user.email;
    userData.name = user.name;
    let todos = allTodos.filter((u) => u.userId == user.id);
    let titles = todos.map((t) => t.title);
    userData.todos = titles.slice(0, 10);
  }
  let userFromFile = allfiledata.find((u) => u.username == user_name);
  if (userFromFile) {
    userData.phones = userFromFile.phones;
  }
//   console.log(userData);

  return userData;
};
// getAllUserData("Bret");

module.exports = { getAllUserData };
