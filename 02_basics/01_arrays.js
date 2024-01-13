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
console.log(concatArray.length)
console.log(concatArray);

const spreadJointArray = [...arr1, ...arr2]; //Here spread operator concats multipal arrays
// console.log(`Spread Operator -> ${spreadJointArray}`)
console.log(spreadJointArray)

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

// -----------------------SCLICE----------------------------
// Working of slice and splice

let arr4 = [1,2,3,4,5]

let arr5 = arr4.slice(1,3); //It prints elements at index 1 & 2 and exclude index 3. Also it dont make change in original array.
console.log(`sliced array -> ${arr5}`) 
console.log(`original array -> ${arr4}`)
// -------------------------SPLICE--------------------------
let arr6 = [9,8,7,6,5]
// `splice` manipulates original Array
let arr7 = arr6.splice(1,3); //It prints elements at index 1, 2 and 3. Also it make change in original array. By excluding element, whose index is kept in splice method.
console.log(`spliced array -> ${arr7}`) 
console.log(`original array -> ${arr6}`)
// ---------------------------------------------------

console.log(Array.isArray("Palash")) //false
console.log(Array.from("Palash"))  // output : [ 'P', 'a', 'l', 'a', 's', 'h' ]

let v1 = "USA"
let v2 = "Canada"
let v3 = "India"

console.log(Array.of(v1, v2, v3));