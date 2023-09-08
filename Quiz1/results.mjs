"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const score = (answers, question) => {
    let quizscore = 0;
    for (let i = 0; i < question.length; i++) {
        if (answers[i] === question[i].correctAnswerIndex) {
            quizscore++;
        }
    }
    return quizscore;
};
exports.default = score;
