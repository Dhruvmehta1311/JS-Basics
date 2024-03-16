

// const p = new Promise((resolve, reject) => {
//     resolve("Promise Resolved Value !!")
// })


// async function getData(){
//     return p
// }

// const dataPromise = getData()
 
// dataPromise.then((res) => console.log(res))


// ----------------------------------------------------------------


// Using Promises
// const p = new Promise((resolve, reject) => {
//     resolve("Promise Resolved")
// })

// function getData(){
//     p.then((res) => console.log(res))
// }

// getData()


// -----------------------------------------------------------------


// Using Async

// const p = new Promise((resolve, reject) => {
//     resolve("Promise Resolved !!")
// })

// async function handlePromise(){
//     const val = await p;
//     console.log(val);
// }

// handlePromise()

// Await is a keyword which can be used inside a async function


// -----------------------------------------------------------------------

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise is Resolved !!")
//     }, 5000);
    
// })
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise is Resolved 2 !!")
//     }, 10000);
    
// })

// async function getData(){
//     console.log("Hey There !!!");
//     const val1 = await p1;
//     console.log("Namaste Javascript");
//     console.log(val1);
//     console.log("Namaste Javascript 2.0");

//     const val2 = await p2;
//     console.log("Namaste Javascript p2");
//     console.log(val2);
// }

// getData()

// function getData(){
//     p.then((res) => console.log(res));
//     console.log("Namaste Javascript.");
// }

// getData()






async function apiData(user){
    const url = `https://api.github.com/users/${user}`
    const getData = await fetch(url)
    const readData = await getData.json();
    console.log(readData.login);
    console.log(readData.company);

}

apiData("DhruvMehta1311")