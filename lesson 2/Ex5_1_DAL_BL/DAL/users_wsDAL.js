const axios = require('axios');

const getUsersData = () =>
{
    return axios.get("http://jsonplaceholder.typicode.com/users")
}

const getUserData = (id) =>
{
    return axios.get("http://jsonplaceholder.typicode.com/users/" + id)
}

module.exports = {getUsersData, getUserData}