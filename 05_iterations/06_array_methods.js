const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


let genre = books.filter((bk) => (bk.genre === "History"))
//   console.log(genre);

let details = books.filter((bk) => {return (bk.genre === "History") && (bk.publish >= 1995)})
console.log(details);

books.forEach((b) => { console.log(b.title)})

// ---------------------------------------------------------------------------------------------
// Map Returns a Value and It creates new array from existing & it do not execute empty array
const arr = [0,1,2,3,4,5,6,7,8,9]

let res =arr.map((val) => ( val *10))
console.log(res);

let chaining = arr
                .map((val) =>(val *10))
                .map((val) => val+1)
                .filter((val) => (val >=60))

console.log(chaining)

// ------------------------------------------Reduce---------------------------------------------------
// UseCase of "reduce method" is when you add items in e-commerce app cart, that you need to add all items price. 
const myTotal = arr.reduce( function(accumolator, currentValue) {
  return accumolator + currentValue;
}, 0 )

// const myTotal = arr.reduce((acc, currVal) => (acc + currVal), 0)
// const myTotal = arr.reduce((acc, currVal) => acc + currVal, 0)
console.log(myTotal);

// ------------------------------

const shoppingCart = [
  {
      itemName: "js course",
      price: 2999
  },
  {
      itemName: "py course",
      price: 999
  },
  {
      itemName: "mobile dev course",
      price: 5999
  },
  {
      itemName: "data science course",
      price: 12999
  },
]

const totalPrice = shoppingCart.reduce( (accumolator, item) => (accumolator + item.price), 0)
console.log(`Total price : ${totalPrice}`);