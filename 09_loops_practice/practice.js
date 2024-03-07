//Write a for loop that prints numbers from 1 to 10.

// for(let i = 1; i<=10; i++){
//     console.log(i);
// }

//Write a for loop that prints even numbers from 2 to 10.

// 2, 4, 6, 8, 10

// for(i=0; i<=10; i+=2){
//     console.log(i);
// }

//Write a for loop that prints the square of numbers from 1 to 5.

// for(let i = 0; i <=5; i++){
//     console.log(i*i);
// }


//Write a for loop that prints the reverse of a given array.

// Dhruv = Vurhd

let arr = ["D", "H", "R", "U", "V"]

// console.log(arr[1]);
// console.log(arr.length);

// for(i =  arr.length - 1; i >= 0; i--){
//     console.log(arr[i]);
// }

// for(i = arr.length - 1; i>=0; i--){
//     console.log(arr[i]);
// }


//Write a for loop that calculates the sum of numbers from 1 to 5.

// let num = 1

// for(i = 1; i<=5; i++){
//     console.log(num += i);
// }


//Write a for loop that prints each character of a given string.

let firstName = "Dhruv";

// console.log(firstName.length);
// console.log(firstName[1]);
// console.log(typeof(firstName));

// for(i = 0; i< firstName.length; i++){
//     console.log(firstName[i]);
// }



//Write a for loop that prints numbers in the Fibonacci sequence up to the 10th term.

/*

i + n = 

0 + 1 = 1
1 + 1 = 2
1 + 2 = 3
2 + 3 = 5
3 + 5 = 8

*/

// let numOne = 0
// let numTwo = 1

// for(i = 2; i<= 10; i++){
//     let result = numOne + numTwo
//     console.log(result);

//     numOne = numTwo;
//     numTwo = result

// }



//Write a for loop that counts down from 10 to 1.

// for(i = 10; i>= 1; i--){
//     console.log(i);
// }


//Write a for loop that iterates through an array and prints each element.

// let myArr = ["D", "H", "R", "U", "V"]

// for(i = 0; i<= myArr.length; i++){
//     console.log(myArr[i]);
// }



// 

// let personsArray = ["Dhruv", "Kartik", "Amisha"]
// let genderArray = ["Male", "Male", "Female"]

// for(i = 0; i <= personsArray.length; i++){
//     if(genderArray[i] == "Male"){
//         console.log(personsArray[i]);
//     }
// }

// const dog = {
//     firstName : "Doggie",
//     legCount : 4,
//     activity : "bhow bhow"
// }
// const cat = {
//     firstName : "Cat",
//     legCount : 4,
//     activity : "Meow Meow"
// }

// function anyName(animal){
//     console.log("Animal Name is : " + animal["firstName"] + ", " + "Animal Leg Count is : " + animal["legCount"] + "Animal Does : " + animal["activity"]);
// }

// anyName(cat)


// -------------------------------------------------------------------

// function a(b, c, cb){
//     console.log(b + c);
//     cb()
// }

// a(2, 10, () =>{
//     let d = 10;
//     for( i = 0; i<d; i++){
//         console.log("This is a CB");
//     }
// })


// ----------------------------------------------------------------------

function sumOfSomething(a, b, cb){
    const val1 = cb(a)
    const val2 = cb(b)
    return val1 + val2
}

const ans = sumOfSomething(2, 2, function square(n){
    return n*n
})
console.log(ans);