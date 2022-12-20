const usersBL = require('./BL/usersBL');



usersBL.getAllUserData("Bret").then(data => console.log(data));