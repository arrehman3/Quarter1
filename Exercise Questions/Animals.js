"use strict";
let animals = ["Cow", "Goat", "Sheep"];
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
for (var i = 0; i < animals.length; i++) {
    if (animals[i] == "Cow") {
        console.log("cow gives milk");
    }
    else if (animals[i] == "Goat") {
        console.log("Goat is a domestic animal");
    }
    else if (animals[i] == "Sheep") {
        console.log("New Zealand has a large production of Sheep");
    }
}
console.log("All of these animals are Halal");
