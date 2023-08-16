console.log("Hello World");
var testVariable = 1;
console.log(typeof testVariable);
var n1 = 5;
var n2 = 3;
// console.log(n1==5);
// console.log(n1===5);
// console.log(n1!=5);
// console.log(n1>8);
// console.log(n1<8);
// console.log(n1>=8);
// console.log(!(n1>10));
function greet(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
var greet2 = function (name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
};
greet("anabia");
greet2("Haim");
// alert("HI");
// let x =("Where does Pope live");
// let answer = "Pakistan";
// if(x==answer)
// {
//     console.log("Correct");
// }
var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2,3,"Lem","Kiwi");
fruits.slice(1);
console.log(fruits);
var temp = fruits.slice(0, 2);
console.log(temp);
