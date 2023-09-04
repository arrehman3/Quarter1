import inquirer from 'inquirer';
import chalk from 'chalk';
import showBanner from 'node-banner';

// (async () => {
//     await showBanner('Quiz', 'Created by Abdur-Rehman', 'green', 'magenta');
// })();
//difference between them
//  var a =1
//  var a=2

//  let b =4
//  let b =4

// union types
let var4 : string | number ;
// undefined
let var5 : undefined
//literal types
let var6: string | "specific"
// type narrowing possible in array and objects
var4 = "abc"
function toLower(varl:String | number)
{
    if(typeof(varl)=="string")
    {
        console.log(varl.toLowerCase);
    }
    else if (typeof(varl)=="number"){
        varl++;
    }
}

 //type alliasing
 //making type

 type type1 = number | "Specific" | "another"

let var7 : type1 = 8;
let var9 = [var7];
let var10 = {
    name : "Hamza",
    fatherName : "tariq"
}

//type annotation for objects

// this is the type
type P1 = {
    name :string,
    age :number,
    //optional ?:
    over_18 ?: boolean
}

//this is the object
const person : P1 ={
    name:"Ali",
    age : 20,
    

}

const per : P1 = {
    name :"Ali",
    age:20,
}

console.log(person===per)


//readonly properties
//cannnot be overwritten

type Point = {
    readonly x : number;
    y : number
}

//optional products
type Product = {
    name?:String;
    price : number
}
  
const p1 : Point = {x:7,y:9}
// cannot be reassigned because its a constant
//p1 = {x:4,y:8}

let p2 : Point ={x:7,y:0}
//can be reassigned because let keyword is used
// this is  called a fresh object
// in javascript we can add properties like this point.z=3 but not in typescript
p2 = {x:8,y:9};


//nested objects
 type Address = {
    street : String,
    city : String
 }

 type Contact = {
    email : String,
    phone : String
 }

 type Person = {
    name : String,
    address : Address,
    contact : Contact
 }

 const P1 : Person={
    name : "sss",
    address : {street:"26",city:"eeee"},
    contact : {email:"reg",phone:"rfe"}
 }


 //interfaces
 // no doublication error in interfaces while type gives duplication error

//  type a = {
//     name:string
//  }
//Interface b is redefined with a property age of type number. In TypeScript, when you define multiple interfaces with the same name, they are merged into a single interface, and the properties are combined
//However, since there is an overlapping property name (age) between b and c, TypeScript will consider the property from the last interface definition (c in this case). So, the resulting type a will only have the age property of type number, and the name property from interface b is not included in a.
 interface b {
    name : string
 }

 interface b{
    age : number
   
 }

 interface c{
    age : number
 }

 type a = b&c;

 //union and intersection


