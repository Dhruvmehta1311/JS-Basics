function fun1(text){
    var a = 4;
    function fun2(){
        a = 22;
        return a
    }
    return fun2;
}
// var a = 4;
let res = fun1("From Fun 1")
res()
