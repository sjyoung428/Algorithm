let numArray = [19, 4, 8, 30, 1, 3];

console.log(numArray.sort()); // [ 1, 19, 3, 30, 4, 8 ]
console.log(numArray.sort((a, b) => a - b)); // [ 1, 3, 4, 8, 19, 30 ]
console.log(numArray.sort((a, b) => b - a)); // [ 30, 19, 8, 4, 3, 1 ]

let stringArray = ["Steele", "Colt", "Data structures", "Algorithms"];

console.log(stringArray.sort()); // [ 'Algorithms', 'Colt', 'Data structures', 'Steele' ]
console.log(stringArray.sort((a, b) => a.length - b.length)); // [ 'Colt', 'Steele', 'Algorithms', 'Data structures' ]
