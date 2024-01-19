// Singleton or using Constructor

// const Obj = {};  //It is not singleton Obj
const Obj = new Object();  //It is singleton Obj

Obj.id = `12345abc`;
Obj.name = "Joe";
Obj.isLoggedIn = true;

console.log(Obj);