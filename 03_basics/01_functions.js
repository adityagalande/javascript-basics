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