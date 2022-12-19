let arr = [{"name" : "Avi", age:20},{"name" : "Ron", age:30},{"name" : "Dana", age : 25}];

let arr2 = arr.filter(p => p.age >= 22 && p.age <= 32);

console.log(arr2);

let arr3 = arr2.map(p => console.log(p.name.length));

