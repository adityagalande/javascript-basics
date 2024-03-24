//Object literals

const objLiteral = {
    name: "AUG",
    'User ID': 'AD423109',
    isLoggedIn: true,
    'loginCount': 4,
    getUserDetail: function(){
        return `User name : ${this.name}`;
    },
    workingDays: ['mon','tue', 'wed', 'thu', 'fri', 'sat']
}

console.log(objLiteral['loginCount'])
console.log(objLiteral['isLoggedIn'])
console.log(objLiteral.isLoggedIn)
console.log(objLiteral['User ID'])
console.log(objLiteral.getUserDetail());
console.log(objLiteral.workingDays.map((val) => (`${val} - day`)))



//Constructor function gives new instance

function user(username = "Vladimir", password = '123'){
    this.username = username    // "this" keyword sets current context
    this.password = password

    return this;
}
//Here we can access value using return this keyword
console.log(user().password)

//New keyword create separate new instance copy
const userOne = user("Alexander", '987');
const userTwo = new user("Rishi", '456'); //If you do not use new keyword like userOne then it will override values
console.log(userOne.username)
console.log(userTwo.constructor)

user.prototype.printMe = function(){
    console.log(`printMe -> ${this.username}`)
}

//userOne.printMe() //If new keyword is not used then unable to understand context coz new copy of object is not created
userTwo.printMe(); // It will work properly


//Using prototype we can inject custome functions
user.prototype.customFunctionInjected = function(){
    console.log(`custom function : ${this.username}`)
}

userTwo.customFunctionInjected()