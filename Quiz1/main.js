"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const quiz_js_1 = __importDefault(require("./quiz.js"));
const chalk_1 = __importDefault(require("chalk"));
const total = await (0, quiz_js_1.default)();
console.log(chalk_1.default.italic.red("Your Score is: ") + chalk_1.default.bold.green(total));
