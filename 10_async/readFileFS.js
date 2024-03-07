// const fs = require("fs")

// fs.readFile("a.txt", "utf-8",  (err, data)=>{
//     console.log(data);
// })

// console.log("Hey This is for Testing");

const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
    } else {
        console.log(data);
    }
});

console.log("Hey This is for Testing");
