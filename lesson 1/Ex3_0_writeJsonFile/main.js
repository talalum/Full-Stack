const utils = require('./utils');

let obj = {id: 5, "name" : "Yoav"};

utils.addUser(obj).then(data => console.log(data))