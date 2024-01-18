//Using constructor object is singleton [ Object.create ]

//Object Literals
const JsUser = {
    name: "Vladimir",
    age: 27,
    location: "Leningrad",
    email: "vladimir.lenin@URLSearchParams.com",
    isLoggedIn: true,
    lastLoginDays: ["Mon", "Tue", "Wed", "Sat"]
};

console.table([JsUser.name, JsUser["email"]]);