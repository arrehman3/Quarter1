var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; //starts with 0
var c = Color.Green;
// enum Color1 {Red = 1, Green, Blue};
// var colorName: string = Color1[2];
// console.log(colorName);
// enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
// var colorIndex = Color2["Blue"];
// console.log(colorIndex);
console.log(c);
