// Singleton or using Constructor

// const Obj = {};  //It is not singleton Obj
const Obj = new Object();  //It is singleton Obj

Obj.id = `12345abc`;
Obj.name = "Joe";
Obj.isLoggedIn = true;
Obj["full name"] = {
    firstName: "Joseph",
    middleName: "Robinette",
    lastName: "Biden"
};

console.log(Obj["full name"].lastName);
console.log(Obj);


console.log(Object.keys(Obj)); //It gives arrays of all keys in 'Obj' Object
console.log(Object.values(Obj)); //It gives arrays of all values in 'Obj' Object
console.log(Object.hasOwnProperty("name")); //It check and return boolean value whether value is present or not.

// Merging Objects using spread operator
const Obj1 = {1: "a", 2: "b"};
const Obj2 = {3: "c", 4: "d"};

const Obj3 = {...Obj1, ...Obj2};
console.log(Obj3);

