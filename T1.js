function fun(){
    var myDate = new Date();
   var date = myDate.toLocaleString();
    console.log(date);
}
fun();
console.log("js?")

///闭包？
var pet = function(name){
     var getName = function(){
         return name;
     }
     return getName;
}
var myPet = pet("xi");
console.log(myPet());

///默认参数
function multiply(a,b){
    b = typeof b!=='undefined'?b:1;
    return a*b;
}
console.log(multiply(5));