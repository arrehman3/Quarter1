import inquirer from "inquirer";
import chalk from "chalk"
export async function questions (){
    const Q1 = await inquirer.prompt([
        {
            // name : "question1",
            // type : "list",
            question : "\nQ1:When Pakistan came into being?\n",
            choices : ["12th","13th","14th","15th"],
            correctAnswerIndex: 2,

        } 
    ]);

    const Q2 = await inquirer.prompt([{
        // name : "question2",
        // type : "list",
        question : "\nQ2:First Governor General of Pakistan?\n",
        choices : ["Quaid-e-Azam","Liaquat Ali Khan","Ayub Khan","Iskandar Mirza"],
        correctAnswerIndex: 0,
    }]);


    const Q3 = await inquirer.prompt([{
        // name : "question3",
        // type : "list",
        question : "\nQ3:First President of Pakistan?\n",
        choices : ["Quaid-e-Azam","Liaquat Ali Khan","Ayub Khan","Iskandar Mirza"],
        correctAnswerIndex: 3,
    }]);

    const Q4 = await inquirer.prompt([{
        // name : "question4",
        // type : "list",
        question : "\nQ4:First Prime Minister of Pakistan?\n",
        choices : ["Quaid-e-Azam","Liaquat Ali Khan","Ayub Khan","Iskandar Mirza"],
        correctAnswerIndex: 1,
    }]);

    const Q5 = await inquirer.prompt([{
        // name : "question5",
        // type : "list",
        question : "\nQ5:When did Quaid-e-Azam died?\n",
        choices : ["1948","1949","1950","1951"],
        correctAnswerIndex: 0,
    }]);


    // let useranswer1 = (ans1.question1);
    // console.log(chalk.blue(useranswer1))

    
}

//await q1();