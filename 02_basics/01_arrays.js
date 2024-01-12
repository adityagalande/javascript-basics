/*
Arrays in javascript are resizable.
It may have mixed elements.

Shallow copy : means have same referance points (change in source Obj reflects in copy Obj)
Deep copy : means "do not have" same referance points (change in source Obj Not reflects in copy Obj)
*/

// Declaration of Array

let arr1 = [1,2,3, "Yes", true];
let arr2 = new Array(1,2,3);

console.log(arr1[3]);
console.log(arr1.length);
console.log(arr1.includes("Yes")); //Gives boolean output.
console.log(arr1.includes(5));
console.log(arr1.indexOf(3)); //Gives index value in array.

let giveStringArray = arr2.join(); //This converts array into string
console.table([typeof giveStringArray, giveStringArray]);

let concatArray = arr1.concat(arr2)
console.log(concatArray.length);
// ---------------------------------------------------
let arr3 = [1,2,3,4,5]

arr3.push(6); //6 push at rare end of array
console.log(arr3);

arr3.pop(); //Here last element means 6 is poped
console.log(arr3);
// ---------------------------------------------------
arr3.unshift(9); // 9 added at front end of Array. [But it is computationally heavey, coz we have to move all values one position]
console.log(arr3);

arr3.shift() // 9 is removed from front end
console.log(arr3);
// ---------------------------------------------------
