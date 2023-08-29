#!/usr/bin/env node
import inquirer from "inquirer";
import add from "./add.mjs";
import subtract from "./subtract.mjs";
import multiply from "./multiplication.mjs";
import divide from "./division.mjs";
import figlet from "figlet";

async function main(){
    const answer = await inquirer.prompt([
        {
            type:"number",
            name : "n1",
            message : "Please Enter N1: "
        },
        {
            type : "number",
            name : "n2",
            message : "Please Enter N2: "
        },
        {
            type : "list",
            name : "operator",
            message : "Please Select",
            choices : ["ADD","SUBTRACT","MULTIPLY","Divide"]
        }
    ])

    if(answer.operator==="ADD")
    {
        console.log(add(answer.n1,answer.n2));
    }
    else if (answer.operator==="SUBTRACT")
    {
        console.log(subtract(answer.n1,answer.n2));
    }
    else if (answer.operator==="MULTIPLY")
    {
        console.log(multiply(answer.n1,answer.n2));
    }
    else{
        console.log(divide(answer.n1,answer.n2));
    }
}

let continueee;
do{
    // console.log('hiiii');
    // console.log(figlet.textSync("Calculator",{font:"Bloody"}))
    await main();
    continueee = await inquirer.prompt([
        {
            type : "confirm",
            name : "continue",
            message : "Do you want to continue? "
        }
    ])
}while(continueee.continue);

