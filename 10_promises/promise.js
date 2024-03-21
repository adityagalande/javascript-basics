const promiseOne = new Promise(function(resolve, reject){

    //Here setTimeout() function took but it can be any operation
    setTimeout(function(){
        console.log("Async task complete")
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

//--------------Below is second type to write promise---------------

const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({name: 'Aditya', stream: 'SDE'})
    }, 2000)
}).then(function(val){
    console.log(val)
})

//--------------Below is second type to write promise---------------


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        const error = false;
        if(!error){
            resolve({name: 'Neftali', age: 67})
        }else{
            reject("Error: Something went wrong")
        }
    },2000)
})

promiseThree.then(function(val){
    console.log(val.age)
    return val.age;
}).then(function(val){
    console.log(val.name)
}).catch(function(errorVal){
    console.log(errorVal);
}).finally(() =>{
    console.log("Promise either resolved or rejected")
})

//--------------------------------USING async & await----------------------------------

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        const error = true;
        if(!error){
            resolve({time: 60, distance: "67km"})
        }else{
            reject("Async & Await Error: Something went wrong")
        }
    },2000)
})

async function consumePromiseFour(){
    try{
        const response = await promiseFour;
        console.log(response)
    }catch(error){
        console.log(error)
    }
}

consumePromiseFour();