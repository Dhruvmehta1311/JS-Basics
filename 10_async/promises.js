// console.log("Start");

// const promise1 = new Promise((resolve, reject) => {
//     // resolve("Promise Resolved")
//     reject("Values are incorrect")

// })

// promise1.then(function success(result){
//     console.log(result)
// }, function faliure(err){
//     console.log(err);
// })

// console.log("End");


function isData(item){
    const promise1 = new Promise((resolve, reject) => {
        if(item){
            resolve("Promise Resolved")
        }
        else{
            reject("Promise Rejected")
        }
    });
    return promise1
}

let result = isData();

result.then(function success(result){
    console.log(result);
}, function faliure(err){
    console.log(err);
})