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
var c = function (x){console.log(x)}
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
// var biggestNum = Number.MAX_VALUE;//最大值
// var smallestNum = Number.MIN_VALUE;//最小值
// var infintteNum = Number.POSITIVE_INFINITY;//正无穷
// var negInfiniteNum = Number.NEGATIVE_INFINITY;//负无穷
// var epsilon = Number.EPSILON;//表示1和比最接近1且大于1的最小Number之间的差别
// var MinSaff = Number.MIN_SAFE_INTEGER;
// var maxSaff = Number.MAX_SAFE_INTEGER;
// c("Number最大值："+biggestNum);
// c("Number最小值："+smallestNum);
// c("Number正无穷:"+infintteNum);
// c("Number负无穷："+negInfiniteNum);
// c(epsilon);
// c("最小安全整数"+MinSaff);
// c("最大安全整数"+maxSaff);

// var str = "515";
// var dou = Number.parseFloat(str)
// c(dou)
// Number.parseFloat
// var arr = [1,2,3,4,5];
// var f =
    // var arr1 = [];
    // for(var i = 0; i<x.length;i++){
    //     arr1.push(x[i]+0.5);
    // }
    // arr1.pop();
    // return arr1;
//     arr.map(function(item) {
//        return item+0.5;
//     }).pop();
// c(f)//[1.5,2.5,3.5,4.5]

// const zipWith = (f,[x, ...xs],[y, ...ys])=>
// x == void 0 || y == void 0
// ?[]
// :[f(x,y), ...zipWith(f,xs,ys)]

// var i = 0b0101010001010110;

//number和math方法

// c(Number.isFinite(i));//是否为有限数字
// c(Number.isInteger(i));//是否为整数
// c(Number.isSafeInteger(i))//值是否为安全整数
// c(Math.PI);//π
// c(Math.sin(1.56));//三角函数？？？
// c(Math.floor(123));
// c(Math.min(1,2));//返回逗号间隔的较小的值，max()返回较大的值
// c(parseInt(100*Math.random()));

//四舍五入                   数字的最接近的单精度浮点数表示       截断小数点后面的数
// c("round:"+Math.round(4.5)+",fround:"+Math.fround(4.4)+",trunc:"+Math.trunc(4.5));
// c("sqrt:"+Math.sqrt(9)+",cbrt:"+Math.cbrt(9)+",hypot:"+Math.hypot(9));//平方根，立方根，第三没看懂

//时间日期对象
// var dateObjectName =  Date()
// c(dateObjectName);
//16进制转义序列
//c('\xA9')//©

//字符串对象
// var s = new String("foo");
// c(s);
// c(typeof(s));//object

var str = "   Hello,World  ";
// var index = 123
// c(str.charAt(2));//l,,,根据参数返回指定字符
// c(str.charCodeAt(2))//根据参数，返回字符编码
// c(str.indexOf("H"));//6...搜索一个字符串并返回该字符串的位置从0开始
// c(str.lastIndexOf("H"))//从后面开始查，返回字符位置
// c(str.startsWith("h"))//查看开头字符是否是已指定字符开头返回true或false区分大小写
// c(str.endsWith("d"))//查看结尾字符是否是已指定字符结尾返回true或false区分大小写
// c(str.includes("w"))//查看中间字符是否包含指定字符返回true或false区分大小写
// c(str.concat(index));//拼接字符串\（WHello,World123）
// str.split();
// c(str[0]);//分割字符串成为数组
// c(str.slice(index))//根据下标返回指定字符（H）
// c(str.substring(1,4));//起始位置和结束位置，来返回（ell）
// c(str.substr(1,4));//从起始位置截取几位（ello）
// c(str.toLowerCase());//返回字符串的小写（hello，world）
// c(str.toUpperCase());//返回字符串大写（HELLO,WORLD)
// c(str.normalize());//?????按照指定的一种 Unicode 正规形式将当前字符串正规化。
// c(str.repeat(2));//根据参数返回重复次数（Hello,WorldHello,World）
// c(str.trim());//返回前后空格
var o ={
    set current(str){
        return this.log[this.log.length] = str;
    },
    log:[]
}
c(o);
//dateTimeFormat
var msPerDay = 24 * 60 * 60 * 1000;
var july = new Date(msPerDay*(44*365+11+197));
var options = {
    year:"2-digit",month:"2-digit",day:"2-digit",
    hour:"2-digit",miunte:"2-digit",timeZoneName:"short"
};
var american = new Intl.DateTimeFormat("en-US",options).format;
c(american(july));








