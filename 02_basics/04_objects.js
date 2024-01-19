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

// Merging Objects using spread operator
const Obj1 = {1: "a", 2: "b"};
const Obj2 = {3: "c", 4: "d"};

const Obj3 = {...Obj1, ...Obj2};
console.log(Obj3);

