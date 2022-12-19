const jFile = require('jsonfile');

exports.addUser = async (user) =>
{
    let data = await jFile.readFile('./users.json');

    let usersList = data.users;

    usersList.push(user);

    let newData = { "users" : usersList};

    await jFile.writeFile('./users.json', newData)

    return "Done !!"

}