"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "Large", text = "I love TypeScript") {
    return "size of the shirt is " + size + "\nMessage is : " + text;
}
console.log(make_shirt());
console.log(make_shirt("medium"));
console.log(make_shirt("small", "hi there"));
