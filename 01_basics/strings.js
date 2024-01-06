
let firstName = "Rohit";
let lastName = "Rohit";
console.log(`I am ${firstName} and I am belongs to ${lastName} "family".`);  

// Here both below and above String declaration are primitive and stored in stack memory

let str = new String(`United States`);
console.log(str);
console.log(str.charAt(0));
console.log(str[7]);
console.log(str.concat(" America"));
console.log(str.toUpperCase());