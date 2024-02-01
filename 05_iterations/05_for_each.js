const arr = ["CRPF", "BSF", "CISF", "ITBP", "SSB", "NDRF", "SRPF"];

arr.forEach(element => {
    console.log(element)
});


// ------------------------------------
// Another way to use For Each loop

function printMe(item){
    console.log(item);
}
// Here give referance of that function
arr.forEach(printMe);


// ------------------------------------
// Here it has value, index of item & Array list
arr.forEach( (value, index, arrList) => {
    console.log(value, index, arrList)
})


// ------------------------------------
// Here Objects inside Array

const objArr = [
    {
        name: "JavaScript",
        fileName: "js"
    },
    {
        name: "Java",
        fileName: "java"
    },
    {
        name: "Python",
        fileName: "py"
    }
];


objArr.forEach( (val) =>{
    console.log(`Name : ${val.name} & Extension : ${val.fileName}`);
})