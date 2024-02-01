let arr = ["IND", "USA", "CAD", "PAK", "UAE"];

// For of loop
for (const iterator of arr) {
    console.log(iterator)
}

const str = "Hello JavaScript!!";
// Here string char by char printed
for(const iterator of str){
    console.log(iterator)
}


// map is Obj, which holdes key value pairs. It keep insertion order of key
const map = new Map();



const obj = {
    n: 1,
    p: 2,
    m: 3
}

console.log(Object.values(obj));