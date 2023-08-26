import inquirer from "inquirer";
import answer from "./numbergenarator.mjs";
import results from "./results.mjs";
import showBanner from "node-banner";
const useranswered :number[]=[];
async function Banner() {
    await showBanner("Guess Game", "Created by Abdur-Rehman");
}
export default async function input() {
    await Banner();
    const useranswer = await inquirer.prompt([
        {
            type: "number",
            message: "Guess first random Number between (1-10): ",
            name: "Guess1"
        },
        {
            type: "number",
            message: "Guess second random Number between (1-10): ",
            name: "Guess2",
        },
        {
            type: "number",
            message: "Guess third random Number between (1-10): ",
            name: "Guess3"
        },
        {
            type: "number",
            message: "Guess fourth random Number between (1-10): ",
            name: "Guess4"
        },
        {
            type: "number",
            message: "Guess fifth random Number between (1-10): ",
            name: "Guess5"
        }
    ]);
    useranswered.push(useranswer.Guess1);
    useranswered.push(useranswer.Guess2);
    useranswered.push(useranswer.Guess3);
    useranswered.push(useranswer.Guess4);
    useranswered.push(useranswer.Guess5);
    results(useranswered, answer);
}

