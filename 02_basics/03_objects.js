//Using constructor object is singleton [ Object.create ]

const mySymbol = Symbol("USSR");

//Object Literals
const JsUser = {
    name: "Vladimir",
    age: 27,
    location: "Leningrad",
    email: "vladimir.lenin@URLSearchParams.com",
    isLoggedIn: true,
    lastLoginDays: ["Mon", "Tue", "Wed", "Sat"],
    "capital city": "Moscow",
    [mySymbol]: "Union Of Soviet Socialist Republic" //This is how we put Symbol datatype key in Object
};

console.table([JsUser.name, JsUser["email"]]);  //Here you have to put age in "" coz in JsUser age key stored as string -> "age"

console.log(JsUser["capital city"]); //If you have space in key then you have to use [] notation insted of . notation

console.log(JsUser[mySymbol]); //This is how we call Symbol datatype in Object Key.

//We can put function in Object
JsUser.language = function(){
    console.log("Slavic Russian");
};

console.log(JsUser.language());


JsUser.age = 28; //value is modified.

Object.freeze(JsUser); //Now we can not change any value entire JsUser Obj.

JsUser.age = 78;
console.log(JsUser["age"]);
console.log(JsUser)