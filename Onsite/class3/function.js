// learning functions
// typeScript helps in typecasting
// function is a keyword
//can also print
//takes parameters
// can or cannot have a return type
// its better to give a return type
// program will not execute after return statement
// function invoking
//logic written before return statement
// explicit output is necessaary in cases it helps to create a good logic and concreteness
//can infer return type bsaed on return
// arrow function anonoymous no name need
//why is arrow function necessary, availble in ECMA 6
// declare variable for arrow functions,because it has no name
function add(num1, num2) {
    return num1 + num2;
}
//for print statements return type is any
function greet(name) {
    console.log("Hello," + name.toUpperCase() + "!!");
}
//arrow function
//()=>{}
//explicit also possibele
//here explicit
var result = function (num1, num2) {
    // console.log(num1+num2)
    return num1 + num2;
};
//here not explicit
var result2 = function (num1, num2) {
    // console.log(num1+num2)
    return num1 + num2;
};
// a more short syntax
// no curly braces
//no return keyword
var result1 = function (num1, num2) { return num1 + num2; };
function greeting(name, age) {
    console.log("My name is " + name + " I am " + age + "years old");
    // string literals
    console.log("My name is ".concat(name, " I am ").concat(age, " years old"));
}
greeting("Abdur -Rehman", 20);
//using arrow functino
var greet1 = function (name, age) { return "My name is ".concat(name, " I am ").concat(age, " years old"); };
console.log(greet1("Abc", 123));
var greet2 = function (name, age) { return console.log("My name is ".concat(name, " I am ").concat(age, " years old")); };
greet2("Xyxz", 321);
