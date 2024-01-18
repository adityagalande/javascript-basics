//Using constructor object is singleton [ Object.create ]

//Object Literals
const JsUser = {
    name: "Vladimir",
    age: 27,
    location: "Leningrad",
    email: "vladimir.lenin@URLSearchParams.com",
    isLoggedIn: true,
    lastLoginDays: ["Mon", "Tue", "Wed", "Sat"],
    "capital city": "Moscow"
};

console.table([JsUser.name, JsUser["email"]]);  //Here you have to put age in "" coz in JsUser age key stored as string -> "age"


console.log(JsUser["capital city"]); //If you have space in key then you have to use [] insted of .