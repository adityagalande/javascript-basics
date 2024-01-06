const ID = 123456;
let password = "rs123";
var userName = "Rohit Sharma";

let state;   //This is not allowed.

console.table([ID, password, userName, state]);

console.table([typeof ID, typeof password, typeof userName, typeof state]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/