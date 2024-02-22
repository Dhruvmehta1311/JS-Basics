// Chaining => Using multiple maps, filter & all

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.map((num)=> num*2 ).map((num)=> num+1).filter((num)=> num >=11)

console.log(newNums);

// const allNums = myNums.map((num) => {
//     return num + 10
// })

// console.log(allNums);