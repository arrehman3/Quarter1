"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var magicians_name = ["X", "Y", "Z"];
function show_magicians(magicians_name) {
    for (var i = 0; i < magicians_name.length; i++) {
        console.log(magicians_name[i]);
    }
}
function make_great(magicians_name) {
    var new_array = magicians_name.slice();
    for (var i = 0; i < new_array.length; i++) {
        new_array[i] = "Great " + magicians_name[i];
        //console.log(new_array[i]);
    }
    return new_array;
}
console.log("Original");
show_magicians(magicians_name);
console.log("New Array");
console.log(make_great(magicians_name));
