//Function


function myName(){
    console.table([`Aditya`, `Ulhas`, `Galande`])
}

myName; //This is function referance
myName(); //This is execution of function [Parenthesis after function definition means it is execution]

console.log(typeof myName)

//These are [parameters] while defining function
function addNums(num1, num2){
    return num1 + num2;
}

// These are [arguments] while calling function
console.log(addNums(9,9));

const res = addNums(7,5);
console.log(`Result : ${res}`);


//If we dont passarguments then default value is used. It will never be undefined.
function getDefaultvalue(name = "Joe"){
    return `name is ${name}`;
}

//"Rest Operator"------->
function calculateCarPrice(val1, val2, ...val){
    console.log(val);
}

calculateCarPrice(1,2,3,4,5)


const car = {
    name: `Kia Sonet`,
    model: `GT-Line`,
    type: `FWD`
}

//Here Object passed as parameter to function
function carObject(obj){
    console.table([obj.name, obj.model, obj.type]);
}

carObject(car);