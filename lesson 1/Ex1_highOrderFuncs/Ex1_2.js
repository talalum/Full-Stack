let arr3 = [[1,6,3,9],[6,12,5,21],[4,11,23,1]];


let arr4 = arr3.map( a => Math.max(...a));
console.log(arr4);

arr4.forEach(x => console.log(x));

let arr5 = arr4.filter(x => x > 10 && x < 20);

console.log(arr5);