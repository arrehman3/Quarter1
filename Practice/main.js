// (async () => {
//     await showBanner('Quiz', 'Created by Abdur-Rehman', 'green', 'magenta');
// })();
//difference between them
//  var a =1
//  var a=2
//  let b =4
//  let b =4
// union types
let var4;
// undefined
let var5;
//literal types
let var6;
// type narrowing possible in array and objects
var4 = "abc";
function toLower(varl) {
    if (typeof (varl) == "string") {
        console.log(varl.toLowerCase);
    }
    else if (typeof (varl) == "number") {
        varl++;
    }
}
let var7 = 8;
let var9 = [var7];
let var10 = {
    name: "Hamza",
    fatherName: "tariq"
};
//this is the object
const person = {
    name: "Ali",
    age: 20,
};
const per = {
    name: "Ali",
    age: 20,
};
console.log(person === per);
const p1 = { x: 7, y: 9 };
// cannot be reassigned because its a constant
//p1 = {x:4,y:8}
let p2 = { x: 7, y: 0 };
//can be reassigned because let keyword is used
p2 = { x: 8, y: 9 };
export {};
//nested objectds
