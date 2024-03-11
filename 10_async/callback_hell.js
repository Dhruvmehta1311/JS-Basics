let fare = 3444434343
let greeting = "We wish you a safe and happy Journey";
function searchTrain(trainNo, cb1) {
  console.log(`Searching for Train Number....`);
  setTimeout(() => {
    let data = `Your train Number is : ${trainNo}`;
    cb1(trainNo, data);
  }, 3000);
}

function bookTrain(trainNo, cb2){
    console.log("Select Train you want to book...");
    setTimeout(() => {
        console.log(`You have selected a Train whose ID is : ${trainNo}`);
        let trainName = `Kalindi`
        cb2(trainName)
    }, 4000);
}

function paymentConfirmation(trainNo, trainName, fare, cb3){
    console.log(`Based on Your Previous Selection, Please wait while we are fetching your data....`);
    setTimeout(() => {
        console.log(`Your Selected Train is ${trainName}, Total Fare is ${fare}`);
        let isPaymentDone = true
        cb3(isPaymentDone)
        }, 4000);
}

function sendConfirmation(trainNo, trainName, isPaymentDone, fare, cb4){
    if (isPaymentDone){
        console.log(`Please wait while we are fetching all of your details...`);
        setTimeout(() => {
            console.log(`Your Train Name is : ${trainName}`);
        console.log(`Your Train Number is : ${trainNo}`);
        console.log(`Your Total Fare is : ${fare}`);
        console.log(`Your Payment Status is : ${isPaymentDone}`);
        let trainTime = `Your Train Time is : 13:00:30`;
        cb4(trainTime)
        }, 6000);
    }
}

function greetings(isPaymentDone, greeting, cb5){
    setTimeout(() => {
        if(isPaymentDone){
            console.log(`${greeting}`);
        }
        else{
            console.log(`Your Payment is Still Pending..`);
        }
    }, 3000);
}

searchTrain(43224433, (trainNo, data) => {
  console.log(data);
  bookTrain(trainNo, (trainName) => {
    console.log(`Based on your ${trainNo}, your Train Name is : ${trainName} `);
    paymentConfirmation(trainNo, trainName, fare, (isPaymentDone) => {
        
        if(isPaymentDone){
            console.log(`Your Payment is Completed Successfully`);
        }
        else{
            console.log(`Your Payment is Still Pending...`);
        }
        sendConfirmation(trainNo, trainName, isPaymentDone, fare, (trainTime) => {
            console.log(`Your Train Time is : ${trainTime}`);
            greetings(isPaymentDone, greeting, (fun5) => {

            })
        })
        
    })
  })
});
