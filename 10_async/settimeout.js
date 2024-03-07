function findSum(n){
    let ans = 0
    for(i = 0; i<n; i++){
        
        ans = ans + i
    }
    return ans;
}



function sumOfAnything(){
    console.log(findSum(100));
}



setTimeout(sumOfAnything, 1000)
console.log("Hii This is for Testing");