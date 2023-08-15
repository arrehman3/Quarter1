import inquirer from "inquirer";
import chalk from "chalk"
export async function q1 (){
    const ans1 = await inquirer.prompt([
        {
            name : "question1",
            type : "list",
            message : "\nQ1:When Pakistan came into being?\n",
            choices : ["12th","13th","14th","15th"],

        }
        
    ]);

    // let useranswer1 = (ans1.question1);
    // console.log(chalk.blue(useranswer1))

    return (ans1.question1 == "14th")
}

//await q1();