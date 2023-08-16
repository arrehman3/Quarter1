console.log("Hello World");
let testVariable = 1;
console.log(typeof testVariable);
let n1 = 5;
let n2 = 3;
// console.log(n1==5);
// console.log(n1===5);
// console.log(n1!=5);
// console.log(n1>8);
// console.log(n1<8);
// console.log(n1>=8);
// console.log(!(n1>10));

function greet(name : String)
{
    console.log("Hello, "+name.toUpperCase()+"!!");
}

let greet2 = (name:String)=>
{
    console.log("Hello, "+name.toUpperCase()+"!!");
}
greet("anabia");
greet2("Haim");

// alert("HI");

// let x =("Where does Pope live");
// let answer = "Pakistan";
// if(x==answer)
// {
//     console.log("Correct");
// }

const fruits = ["Banana","Orange","Apple","Mango"];
// fruits.splice(2,3,"Lem","Kiwi");
fruits.slice(1);

console.log(fruits);

const temp = fruits.slice(0,2);

console.log(temp);