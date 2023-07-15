"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var magicians_name = ["X", "Y", "Z"];
function show_magicians(magicians_name) {
    for (var i = 0; i < magicians_name.length; i++) {
        console.log(magicians_name[i]);
    }
}
function make_great(magicians_name) {
    for (var i = 0; i < magicians_name.length; i++) {
        magicians_name[i] = "Great " + magicians_name[i];
    }
}
make_great(magicians_name);
show_magicians(magicians_name);
