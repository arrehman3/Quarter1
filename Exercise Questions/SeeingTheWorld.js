"use strict";
let place_array = ["Makkah", "Madinah", "Palestine", "Turkey", "Europe"];
for (var i = 0; i < place_array.length; i++) {
    console.log(place_array[i]);
}
console.log("Alphabetical Order");
console.log(place_array.slice().sort());
console.log("Original Array");
console.log(place_array);
console.log("Reverse Alphabetical Order");
console.log(place_array.slice().sort().reverse());
console.log("Original Array");
console.log(place_array);
console.log("reversed");
console.log(place_array.reverse());
console.log("Back to Original");
console.log(place_array.reverse());
console.log("Original Sorted");
console.log(place_array.sort());
console.log("Original reverse sorted");
console.log(place_array.reverse());
