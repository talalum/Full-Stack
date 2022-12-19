const str_utils = require('./str_utils');

const GetArrLength = (array) => {
    let total = 0;
    array.forEach(element => {
        total += str_utils.getLen(element);
    });
    // array.reduce((a, b) => {
    //     a =  str_utils.getLen(b);
    // })

    const sum = array.reduce((accumulator, value) => {
        return accumulator + str_utils.getLen(value);
      }, 0);

    console.log(sum);
    return total;
}

module.exports = {GetArrLength}