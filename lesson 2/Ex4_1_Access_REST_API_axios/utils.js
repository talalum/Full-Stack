const axios = require('axios');
const jFile = require('jsonfile');


exports.getUsersFromWS = async (user_name) =>
{
    let resp = await axios.get("http://jsonplaceholder.typicode.com/users");
    let allUsers = resp.data;
    currentUser = allUsers.find(u => u.username == user_name);
    if(currentUser) {
        if(currentUser.name.startsWith("E")) {
            let resp = await axios.get("http://jsonplaceholder.typicode.com/todos?userId=" + currentUser.id);
            let allTodos = resp.data;
            let titles = allTodos.map(t => t.title);
            let todosObj = {todos : titles};
            await jFile.writeFile("todos.json", todosObj);
            return("todos added!");
        }
    } else {
        return("User not exists!");
    }
}

