//Function


function myName(){
    console.table([`Aditya`, `Ulhas`, `Galande`])
}

myName; //This is function referance
myName(); //This is execution of function [Parenthesis after function definition means it is execution]

console.log(typeof myName)

function addNums(num1, num2){
    return num1 + num2;
}

console.log(addNums(9,9));