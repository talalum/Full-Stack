// let arr = [1,2,3,4,5,6];

function getArrSum(arr){
    return new Promise(resolve => {
        setTimeout( () => {
            const avg = arr.reduce((a, b) => a + b)/arr.length;
            resolve(avg);
        }, 1000)
    });
}

getArrSum([1,2,3,4,5,6]).then(avg => console.log(avg));
console.log("End");