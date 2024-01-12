
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
console.log(str.substring(2,7));
console.log(str.substring(7));

console.log(str.slice(2,5)); //It will return
console.log(str.slice(-13, 7)); //It will return
console.log(str.replace("Sta", "Mta")); //It will replace
console.log(str.includes("ted")); //It will return boolean

console.log(str.split(" ")); //It will make it array

console.log(str.includes("Z"));