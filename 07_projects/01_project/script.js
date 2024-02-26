const body = document.querySelector("body")
const buttons = document.querySelectorAll(".button")

buttons.forEach((button)=>{
    // console.log(button);

    button.addEventListener("click", (clickEvent)=>{
        console.log(clickEvent);
        console.log(clickEvent.target.id);

        if (clickEvent.target.id === clickEvent.target.id) {
            body.style.backgroundColor = clickEvent.target.id           
        }


    })

})


























// const buttons = document.querySelectorAll(".button")
// const body = document.querySelector("body")

// // console.log(buttons);

// buttons.forEach(function(button){
//     // console.log(button);

//     button.addEventListener("click",(e)=>{
//         // console.log(e);
//         // console.log(e.target);
//         if (e.target.id === e.target.id) {
//             console.log(e.target.id);
//             body.style.backgroundColor = e.target.id
//         }
//     })
// })




// const body = document.querySelector("body")
// const buttons = document.querySelectorAll(".button")

// buttons.forEach(function(button){
//     // console.log(button);
//     button.addEventListener("click", function(e){
//         console.log(e);
//         // console.log(e.target);

//         if (e.target.id === e.target.id) {
//             body.style.backgroundColor = e.target.id
//         }



//     } )
// })