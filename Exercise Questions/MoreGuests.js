"use strict";
let array_Guest1 = ["Tayyab", "Danish", "Momina"];
for (var i = 0; i < array_Guest1.length; i++) {
    console.log("Hi " + array_Guest1[i] + " you are invited to dinner");
}
console.log("Oh!Wait i found a bigger table");
//at start
array_Guest1.unshift("Anees");
//at middle
array_Guest1.splice(2, 0, "Ali");
// at
array_Guest1.push("Arham");
for (var i = 0; i < array_Guest1.length; i++) {
    console.log("Hi " + array_Guest1[i] + " you are invited to dinner");
}
