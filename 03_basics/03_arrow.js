// This keyword tells about current context

const user = {
    username: "Dhruv",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to Website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Shajin"
// user.welcomeMessage()

// console.log(this);

function test(){
    let username = "Dhruv"
    console.log(this);
}

// test()

// const chai = function name() {
//     let username = "Dhruv"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Dhruv"
    console.log(this.username);
}

// chai()

// SYNTAX
// const addTwo = () => {

// }

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const twoNumbers = addTwo(4, 7)
// console.log(twoNumbers);

// IMPLICIT RETURN

// const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => (num1 + num2)

// const twoNumbers = addTwo(4, 7)
// console.log(twoNumbers);

const myArray = [2, 4, 4,5, 5, 23]

// myArray.forEach(() => {})





