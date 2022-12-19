const Jfile = require("jsonfile");

exports.getDataById = async (id) => {
  const usersData = await Jfile.readFile("./users.json");
  const phonesData = await Jfile.readFile("./phones.json");
  const userData = usersData.users.find((u) => u.id === id);
  const phonesArr = phonesData.phones.find((p) => p.userid === id);
  let userObj = {
    id: userData.id,
    name: userData.name,
    phone: phonesArr.phones,
  };
  return userObj;
}

