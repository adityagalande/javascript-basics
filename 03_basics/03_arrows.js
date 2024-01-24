

const user = {
    name: "Joe",
    age: 76,

    welcomeMsg: function() {
        //Here this keyword refers current context
        console.log(`${this.name}, welcome to website`)
    }
}

user.welcomeMsg();
user.name = "Donald"
user.welcomeMsg()

//Here it shows empty Object as there is no any global Obj, but while doing this on browser it gives windows Obj, as it is used for various events calling
console.log(this);


//Explicit return Arrow Function

const add = (num1, num2) => {
    //If you use explicit function then must use return
    return num1 + num2
}
console.log(`Addition : ${add(3,3)}`)


//If you use implicit function then No need to use return
const mul = (num1, num2) => (num1 * num2)
console.log(`Multiplication : ${mul(3,3)}`)


//If want to use Obj in rrow function then must use parenthesis to wrap it.
const nameObj = () => ({
    name: "Neftali"
})
console.log(nameObj().name)