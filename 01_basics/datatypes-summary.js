// Primitive

// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, Bigint

const score = 200
const scoreValue = 200.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3453452434245455454n

console.log(typeof bigNumber);


// Reference Type or Non Primitive Data Type

// Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"]
let myObj = {
    name: "Dhruv",
    age: 24,
    occuption: "Software Developer"
}

const myFunction = function(){
    console.log("Hello World");
}



