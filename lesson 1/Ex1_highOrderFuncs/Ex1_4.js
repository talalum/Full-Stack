// let arr = [[1,6,3,9],[6,12,5,21],[4,11,23,1]];

function funcA (arr) {
    return new Promise( resolve => {
        setTimeout(() => {
            let total_sum = 0;
            arr.forEach((ar) => {
                total_subArr = ar.reduce((sum, num) => {
                return sum + num;
                });
                total_sum += total_subArr;
            });
            resolve(total_sum);
        }, 2000);
    });
        
}
//then
function funcB2(arr) {
    return new Promise( resolve => {
        funcA(arr).then(total => resolve(total));
    });
}

//async await
async function funcB(arr) {
    const res = await funcA(arr);
    return res;
}


    
funcB2([[1,6,3,9],[6 ,12,5,21],[4,11,23,1]]).then(total => console.log(total));
console.log("END");