import chalk from "chalk";
let points = 0;
async function result(a) {
    if (a) {
        console.log(chalk.green.bold("correct"));
        points++;
    }
    else {
        console.log(chalk.red.italic("Wrong"));
    }
    return points;
}
export default result;
