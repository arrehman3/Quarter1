import chalk from "chalk";

let points:number = 0;

async function result(a:boolean){
    if(a)
    {
        console.log(chalk.green.bold("correct"));
        points++;
    }
    else{
        console.log(chalk.red.italic("Wrong"))
    }

    return points;


}

export default result;