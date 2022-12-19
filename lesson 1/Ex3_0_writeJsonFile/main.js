const utils = require('./utils');

let obj = {id: 4, "name" : "Tal"};

utils.addUser(obj).then(data => console.log(data));
