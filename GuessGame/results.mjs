"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import answer from "./numbergenarator.mjs"
// import useranswered from "./userprompt.mjs"
const chalk_1 = __importDefault(require("chalk"));
function results(useranswered, answer) {
    let score = 0;
    for (let i = 0; i < answer.length; i++) {
        if (useranswered[i] === answer[i]) {
            score++;
        }
    }
    for (let i = 0; i < answer.length; i++) {
        console.log(chalk_1.default.red.bold(`Your Guess for ${i + 1} is ${useranswered[i]}`));
        console.log(chalk_1.default.green.italic(`Random Number is ${answer[i]} `));
    }
    console.log("Your score is: " + score);
}
exports.default = results;
