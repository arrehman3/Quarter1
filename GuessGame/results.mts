// import answer from "./numbergenarator.mjs"
// import useranswered from "./userprompt.mjs"
import chalk from "chalk";
function results(useranswered:number[], answer:number[]) {
    let score = 0;
    for (let i = 0; i < answer.length; i++) {
        if (useranswered[i] === answer[i]) {
            score++;
        }
    }
    for (let i = 0; i < answer.length; i++) {
        console.log(chalk.red.bold(`Your Guess for ${i + 1} is ${useranswered[i]}`));
        console.log(chalk.green.italic(`Random Number is ${answer[i]} `));
    }
    console.log("Your score is: " + score);
}
export default results;