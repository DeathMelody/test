function fun(){
    var myDate = new Date();
   var date = myDate.toLocaleString();
    console.log(date);
}
fun();
console.log("js?")

var pet = function(name){
     var getName = function(){
         return name;
     }
     return getName;
}
var myPet = pet("xi");
console.log(myPet());