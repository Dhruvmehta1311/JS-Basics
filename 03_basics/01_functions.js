


function sayMyName(){
    console.log("D");
    console.log("H");
    console.log("R");
    console.log("U");
    console.log("V");
}

// sayMyName()


function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
    console.log("Dhruv");
}

// const result = addTwoNumbers(3, 5)

// console.log(`Value of Result is: ${result}`);

function loginUserMessage(username = "Kartik"){
    if (username === undefined) {
        console.log("Please Enter Username");
        return
    }
    return `${username} just logged in`
}

// const iLoggedIn = loginUserMessage()

// console.log(iLoggedIn);

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 300, 432, 3242, 33223));


const myInfo = {
    name: "Dhruv",
    age: 25,
    color: "White"
}

function myInformation(anyObject){
    console.log(`Hey name of user is : ${anyObject.name}`);
}

// myInformation(myInfo)
myInformation({
    name: "Sam",
    age: 399
})


const myArray = [200, 4000, 332, 443]

function myFuncArr(getArray){
    console.log(`Array is : ${getArray[1]}`);
}

myFuncArr(myArray)