// For

for (let index = 0; index < 10; index++) {
    const element = index;
    if(element == 5){
        console.log(`${element} is Best Number`);
    }
    // console.log(element);
}

for (let i = 0; i <= 10; i++) {
    console.log(`Outer Loop Value : ${i}`);
    for (let j = 0; j < 10; j++) {
        console.log(`Inner Loop Value: ${j} and Inner Loop ${i}`);
        
    }
    
}
