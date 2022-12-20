const jFile = require('jsonfile');

const getUsersData = () =>
{
    return jFile.readFile('./Data/users.json')
}


module.exports = {getUsersData}
