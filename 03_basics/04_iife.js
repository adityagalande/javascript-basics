// Immediate Invoked Function Expressions 

/*
() ()

Here first parenthesis for Define function & second for calling function

[we use iife to avoid pollution from global scoped variables]
*/

(function divNum(){
    console.log(66/2);
})();


( (num1, num2) => {
    console.log(num1 + num2)
} )(78, 2);