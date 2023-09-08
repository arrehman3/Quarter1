"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function randomNumber() {
    return Math.floor(Math.random() * (10 - 1) + 1);
}
const answer = [];
for (let i = 0; i < 5; i++) {
    const num = randomNumber();
    answer.push(num);
}
// for(let i =0;i<answer.length;i++){
// console.log(answer[i])
// }
exports.default = answer;
