let arr = ["IND", "USA", "CAD", "PAK", "UAE"];

// For of loop
for (const iterator of arr) {
    // console.log(iterator)
}

const str = "Hello JavaScript!!";
// Here string char by char printed
for(const iterator of str){
    // console.log(iterator)
}


// map is Obj, which holdes unique key value pairs. It keep insertion order of key
const map = new Map();
map.set('IND', "India")
map.set('USA', `United States of America`)
map.set('BA', `Bosnia And Herzegovina`)
map.set('FR', `France`)
map.set('KG', `KYRGYZSTAN`)

for(const [key, val] of map){
    // Here val gives array like -: [IND, India]
    // console.log(val)

    // Here use Array de-structuring
    console.log(`Code ${key} : ${val}`);
}

// console.log(map)
// console.log(map.get('BA'))


// -------------------------------------------------------
// Here Array de-structuring.
let a,b;
({a, b} = {a: 2, b: 3})
console.log(`${a}   ${b}`);


const obj = {
    n: 1,
    p: 2,
    m: 3
}
console.log(Object.values(obj));
console.log(Object.keys(obj));




// If you use For in loop on Array it will give only keys not values
for (const key in arr) {
    console.log(key);
    // console.log(arr[key]);
}