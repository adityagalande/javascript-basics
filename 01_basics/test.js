let git = "Git";
let js = "JavaScript";
console.log(`Hey ${git} & ${js} !!!`);


const arr = [1,2,3,4,5,6,7,8,9];
const arrs = [1,2,3,4,5,6,7,8,9];

console.table([(arr.slice(2,4)),(arr)]);
console.table([(arrs.splice(1,3)),(arrs)])


let arr6 = [9,8,7,6,5]
// `splice` manipulates original Array
let arr7 = arr6.splice(1,3); //It prints elements at index 1, 2 and 3. Also it make change in original array. By excluding element, whose index is kept in splice method.
console.log(`spliced array -> ${arr7}`) 
console.log(`original array -> ${arr6}`)