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
function add (num1:number,num2:number):number{
    return num1+num2;
}

//for print statements return type is any
function greet(name:string)
{
    console.log("Hello,"+name.toUpperCase()+"!!")
}

//arrow function
//()=>{}
//explicit also possibele
//here explicit
let result = (num1:number,num2:number):number=>{
    // console.log(num1+num2)
     return num1+num2;
}
//here not explicit
let result2 = (num1:number,num2:number)=>{
    // console.log(num1+num2)
     return num1+num2;
}
// a more short syntax
// no curly braces
//no return keyword
let result1 = (num1:number,num2:number)=>num1+num2

function greeting(name:string,age:number)
{
    console.log("My name is "+name+" I am "+age+"years old")
    // string literals
    console.log(`My name is ${name} I am ${age} years old`) 
}

greeting("Abdur -Rehman",20)

//using arrow functino
let greet1 = (name:string,age:number)=>`My name is ${name} I am ${age} years old`

console.log(greet1("Abc",123))

let greet2 = (name:string,age:number)=>console.log(`My name is ${name} I am ${age} years old`)

greet2("Xyxz",321)