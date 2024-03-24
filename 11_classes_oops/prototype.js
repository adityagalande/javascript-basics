/**/

let heroPower = {
    thor: 'Hammer',
    spiderman: 'web'
}

Object.prototype.captainAmerica = function(){
    console.log('captain america present in object')
}

console.log(heroPower.captainAmerica())


//----------------------------For Array--------------------------------------

let arr = ['a', 'b','c']
console.log(arr);

//this function will present in all arrays
Array.prototype.addFun = function(){
    console.log('addFun function present in array')
}

arr.addFun()