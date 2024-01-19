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
