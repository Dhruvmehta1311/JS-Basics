const name = "Dhruv"
const repoCount = 28

// console.log(name + repoCount + " Value");


console.log(`Hello My name is ${name}, My Repo Count is ${repoCount}`);


const gameName = new String(`Dhruv-M`)

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.toLowerCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('u'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString);

const newStringOne = "   Dhruv.    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.github%20com"

console.log(url.replace('%20', '.'));

console.log(url.includes('test'));

console.log(gameName.split('-'));