// For

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if(element == 5){
//         console.log(`${element} is Best Number`);
//     }
//     console.log(element);
// }

for (let i = 1; i <= 10; i++) {
    // console.log(`------------------------------------------`);
    // console.log(`Outer Loop Value : ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop Value: ${j} and Inner Loop ${i}`);
        // console.log(i + `*` + j + ` = ` + i*j);

    }
    
}

let myArray = ["Flash", "Aarav", "Hero", "Shaktimaan"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    // console.log(myArray[index]);
    
}

// for (let myBreak = 0; myBreak < 10; myBreak++) {
//     console.log(`Value is ${myBreak}`);
//     if (myBreak == 5) {
//         console.log(`${myBreak} is Detected`);
//         break;
//     }
    
    
// }

for (let myBreak = 0; myBreak < 10; myBreak++) {
    
    if (myBreak == 5) {
        console.log(`${myBreak} is Detected`);
        continue;
    }
    console.log(`Value is ${myBreak}`);
    
}

