//data structure
// known values or constant values
//array ke index constant hote hn that cannot be chaned to strings
enum Color {Red, Green, Blue};//starts with 0
var c: Color = Color.Green;

// enum Color1 {Red = 1, Green, Blue};
// var colorName: string = Color1[2];
// console.log(colorName);

// enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
// var colorIndex = Color2["Blue"];
// console.log(colorIndex);

// console.log(c);

enum matchResults {win = "won",lose="lose",tie="tie"}

let team1Score = 200;
let team2SCore = 204;


if(team1Score>team2SCore)
{
    console.log(`Team 1 has ${matchResults.win}`);
}

//const enum cannot be accessed through index while simple enums can be


