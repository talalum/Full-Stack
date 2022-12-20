const axios = require('axios');

const getTodossData = () =>
{
    return axios.get("http://jsonplaceholder.typicode.com/todos");
}

module.exports = {getTodossData}