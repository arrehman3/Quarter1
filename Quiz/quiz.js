"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const result_js_1 = __importDefault(require("./result.js"));
const question_js_1 = require("./question.js");
// (async () => {
//      await showBanner('QUIZ',"");   
// })(); // Immediately Invoked Function Expression (IIFE) means execution first,function expression not declared
let answer1 = await (0, question_js_1.questions)();
//console.log(answer1);
let score = await (0, result_js_1.default)(answer1);
console.log(score);
