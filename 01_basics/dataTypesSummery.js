//2 Types : Call by values & Call by referance

// #Primitive type -> Number, String, Boolean, null, undefined, BigInt, Symbol

let value = 18;  //Decimals and numbers are treated as numbers only.
let firstName = "Virat"; //String
let batter = true; //Boolean
let penalties = null; //Object
let retirement = undefined; //Undefined
let netWorth = 12345674535732576778645635645343289n;  //bigint

let ID1 = Symbol(123); //Here Symbol treat each value as different even if it is identical values.
let ID2 = Symbol(123); //Symbol

console.table([typeof value, typeof firstName, typeof batter, typeof penalties, typeof retirement, typeof netWorth, typeof ID1, (ID1===ID2)]);

// *****************************************************************************************************************************************************

// #Referance type -> Array, Object, Function

let arr = [1,2,"aditya", 'Q', 8.2, true];

let obj = {
    name : "Rohit",
    age : 36
};

const fun = function() {
    return 45;
}

console.table([typeof arr, typeof obj, typeof fun]);