console.log(Date.now())  //Gives current date in miliseconds(Time Stamp).

let date = new Date();  
console.log(typeof date) //Date is an Object type
console.log(date)
console.log(date.toString())
console.log(date.getDay())
console.log(date.toLocaleDateString())
console.log(date.toLocaleString())
console.log(date.toISOString())
console.log(date.toJSON())
console.log(date.toDateString())
console.log(date.toTimeString())

// let myCreatedDate = new Date(2023, 0, 4); //year, month(JAN), day
// let myCreatedDate = new Date(2022, 0, 13, 8, 26);  //Here year, month, day, hour, minute mentioned
let myCreatedDate = new Date("01-14-2023");  //MM-DD-YYYY (format) you can write any format like yyyy-mm-dd
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.getTime());  //Gives output in miliseconds TimeStamp