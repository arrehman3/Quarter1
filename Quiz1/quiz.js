import inquirer from "inquirer";
import score from "./results.mjs";
import question from "./questions.mjs";
import showBanner from "node-banner";
async function banner() {
    await showBanner("Quiz", "Created by Abdur-Rehman");
}
async function quiz() {
    await banner();
    let answers = [];
    for (let i = 0; i < question.length; i++) {
        const ans = await inquirer.prompt([
            {
                type: "list",
                name: "answer",
                message: question[i].question,
                choices: question[i].choices
            }
        ]);
        answers.push(question[i].choices.indexOf(ans.answer));
    }
    const finalscore = score(answers, question);
    // console.log("score")
    // console.log(finalscore);
    return finalscore;
}
export default quiz;
// console.log("h")
// const total = await quiz();
// console.log(total)
