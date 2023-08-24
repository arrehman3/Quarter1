import quiz from "./quiz.js";
import chalk from "chalk";
const total = await quiz();
console.log(chalk.italic.red("Your Score is: ") + chalk.bold.green(total));
