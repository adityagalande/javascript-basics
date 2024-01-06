let num = "123";
// Here type is String
console.log(typeof num);

num = Number(num);
// Now we converted String datatype to Number
console.log(typeof num);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let num1 = "a456"
console.log(typeof num1);

num1 = Number(num1);
console.log(num1);
// Here it says Not a number (NAN) because it contains char 

console.log(typeof num1); 
// But type is converted to Number from String


// **************************Boolean***************************************************
let isOn = "Aditya";
let isOff = "";

let resIsOn = Boolean(isOn);
let resIsOff = Boolean(isOff);
/*
"Aditya" -> true because not empty String -> 0 means true
"" -> false becuse empty String -> 1 means false
*/
console.table([resIsOn, resIsOff]);


// ***************************Number**************************************************
let value = 45;
console.log(value);

value = -value;
console.log(value);

// ****************************Boolean*************************************************

let isRun = true;
console.log(isRun);

isRun = !isRun;
console.log(isRun);
