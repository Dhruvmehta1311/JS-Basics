function searchFood(item, cb1){
    console.log(`Searching Started for ${item}`);
    setTimeout(() => {
        let data = `List of ${item}`;
        cb1(data)
    }, 3000);
}

let res = searchFood("Burger", (myList) => {
    console.log(myList);
})
