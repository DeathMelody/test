// function fun(){
//     var myDate = new Date();
//    var date = myDate.toLocaleString();
//     console.log(date);
// }
// fun();
// console.log("js?")

///闭包？
// var pet = function(name){
//      var getName = function(){
//          return name;
//      }
//      return getName;
// }
// var myPet = pet("xi");
// console.log(myPet());

///默认参数
// function multiply(a,b){
//     b = typeof b!=='undefined'?b:1;
//     return a*b;
// }
// console.log(multiply(5));

// function multiply()

//解构？？
// var foo = ["one","two","3"]
// var s = [one,two,three] = foo;
// console.log(s)
//进制？
var c = function (s){
    console.log(s)
}
// var sixteen = 0xABCDDDDD;//十六进制以0x开头，不论大小写
// var ten = 0900101010;//十进制0后面跟>=8的数字
// var eight = 076666666;//八进制0后面跟随0到7（包含7）的数字
// var num = 0b1000000000000000000000000000000;//二进制以0b开头，不论大小写
// var index = 2e6;//指数形式？？？？？
// console.log("二进制:"+num);
// clg("十进制："+ten);
// clg("八进制："+eight);
// clg("十六进制："+sixteen);
// clg("指数？？？"+index);
var biggestNum = Number.MAX_VALUE;//最大值
var smallestNum = Number.MIN_VALUE;//最小值
var infintteNum = Number.POSITIVE_INFINITY;//正无穷
var negInfiniteNum = Number.NEGATIVE_INFINITY;//负无穷
var epsilon = Number.EPSILON;
c("Number最大值："+biggestNum);
c("Number最小值："+smallestNum);
c("Number正无穷:"+infintteNum);
c("Number负无穷："+negInfiniteNum);
c(epsilon);
