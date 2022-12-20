// const fileDAL = require("../DAL/jsonFileDAL");

// const getUserphones = async (user_name) => {
//   let data = await fileDAL.getUsersData();
//   let users = data.users;
//   console.log("users");
//   let user = users.find((x) => x.username == user_name);

//   console.log("user");
//   if (user) {
//       console.log(user);
//       return user.phones;
//   } else{
//     return "User not Exists!";
//   }
// };

// getUserphones("Bret");

// module.exports = {getUserphones}