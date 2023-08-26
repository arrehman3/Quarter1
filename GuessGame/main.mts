
import input from "./userprompt.mjs";
import inquirer from "inquirer";
let cont;
do{
    await input()
    cont = await inquirer.prompt([
        {
            type:"confirm",
            name : "continue",
            message:"Wanna try again? "
           
        }
    ])
}while(cont.continue)