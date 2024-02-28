const form = document.querySelector("form")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    // console.log(e);

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    // console.log(typeof(height));

    const result = document.querySelector("#results")
    const bmi = (weight / ((height*height)/10000)).toFixed(2)

    if (height === "" || height <=0 || isNaN(height)) {
        results.innerHTML = `<br><span>Enter a Valid Height.</span>`
    }
    else if (weight === "" || weight <= 0 || isNaN(weight)) {
        results.innerHTML = `<br><span>Enter a Valid Weight.</span>`
    }
    else{
        results.innerHTML = `<br><span>Your BMI is : ${bmi}</span>`
    }
    
    const message = document.querySelector("#message")

    if(bmi <= 18.6){
        message.innerHTML = "Note : Your BMI Suggests that you are Underweight, <br> Kindly work on it."
    }
    else if(bmi > 18.6 && bmi <= 24.9){
        message.innerHTML = "Note : Your BMI Suggests that your weight is normal.<br> Keep up the good work."
    }
    else if(bmi > 24.9){
        message.innerHTML = "Note : Your BMI Suggests that you are Overweight,<br> Kindly work on it"
    }
    


})




// const form = document.querySelector("form")

// form.addEventListener('submit', (e)=>{
//     e.preventDefault()

//     const height = parseInt(document.querySelector("#height").value)
//     const weight = parseInt(document.querySelector("#weight").value)

//     const results = document.querySelector("#results")

//     const bmi = (weight / ((height*height)/10000)).toFixed(2)

    // if (height === "" || height <=0 || isNaN(height)) {
    //     results.innerHTML = `<span>Enter a Valid Height.</span>`
    // }
    // else if (weight === "" || weight <= 0 || isNaN(weight)) {
    //     results.innerHTML = `<span>Enter a Valid Weight.</span>`
    // }
    // else{
    //     results.innerHTML = `<span>Your BMI is : ${bmi}</span>`
    // }
    
//     const messages = document.querySelector("#message")

//     if(bmi < 18.6){
//         messages.innerHTML = `<span>You are Over Weight</span>`
//     }
//     else if(bmi >= 18.6 && bmi <= 24.9 ){
//         messages.innerHTML = `<span>You are Normal</span>`
//     }
//     else{
//         messages.innerHTML = `<span>You are Overweight. Please Work on it.</span>`
//     }


// })









// const form = document.querySelector('form')

// form.addEventListener('submit', (e)=>{
//     e.preventDefault()

//     const height = parseInt(document.querySelector("#height").value)
//     const weight = parseInt(document.querySelector("#weight").value)
//     const results = document.querySelector("#results")

//     if (height === "" || height < 0 || isNaN(height)) {
//         results.innerHTML = "Please Give a valid Height"
//     }
//     else if (weight === "" || weight < 0 || isNaN(weight)) {
//         results.innerHTML = "Please Give a valid Weight"
//     } else{
//         const bmi = (weight / ((height*height)/10000)).toFixed(2)
//         // show result
//         results.innerHTML = `<br><span>Your BMI is : ${bmi}</span <br>`

//         const message = document.querySelector("#message")


//         if(bmi < 18.6){
//             message.innerHTML = "<span>You fall in : Under Weight Category</span>"
//         }
//         else if (bmi > 18.6 && bmi < 24.9){
//             message.innerHTML = "<span>Normal</span>"
//         }
//         else {
//             message.innerHTML = "<span>Overweight</span>"
//         }
//     }    
// })

