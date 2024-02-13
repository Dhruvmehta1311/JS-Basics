const myArr = ["Hero", "Shaktimaan", "Hatim"]
const myHeros = ["Spartan", "Flash", "Thor"]

// myArr.push(myHeros)

// console.log(myArr);
// console.log(myArr[3] [2]);

// console.log(myArr.concat(myHeros));

// Spread
const allHeros = [...myArr, ...myHeros]
// console.log(allHeros);


const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// console.log(anotherArray.length);

// const realAnotherArray = anotherArray.flat(1)
const realAnotherArray = anotherArray.flat(Infinity)
// console.log(realAnotherArray);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "Dhruv"})) // Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(typeof score1);

console.log(Array.of(score1, score2, score3));
