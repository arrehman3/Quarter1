"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.questions = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
function questions() {
    return __awaiter(this, void 0, void 0, function* () {
        const Q1 = yield inquirer_1.default.prompt([
            {
                // name : "question1",
                // type : "list",
                question: "\nQ1:When Pakistan came into being?\n",
                choices: ["12th", "13th", "14th", "15th"],
                correctAnswerIndex: 2,
            }
        ]);
        const Q2 = yield inquirer_1.default.prompt([{
                // name : "question2",
                // type : "list",
                question: "\nQ2:First Governor General of Pakistan?\n",
                choices: ["Quaid-e-Azam", "Liaquat Ali Khan", "Ayub Khan", "Iskandar Mirza"],
                correctAnswerIndex: 0,
            }]);
        const Q3 = yield inquirer_1.default.prompt([{
                // name : "question3",
                // type : "list",
                question: "\nQ3:First President of Pakistan?\n",
                choices: ["Quaid-e-Azam", "Liaquat Ali Khan", "Ayub Khan", "Iskandar Mirza"],
                correctAnswerIndex: 3,
            }]);
        const Q4 = yield inquirer_1.default.prompt([{
                // name : "question4",
                // type : "list",
                question: "\nQ4:First Prime Minister of Pakistan?\n",
                choices: ["Quaid-e-Azam", "Liaquat Ali Khan", "Ayub Khan", "Iskandar Mirza"],
                correctAnswerIndex: 1,
            }]);
        const Q5 = yield inquirer_1.default.prompt([{
                // name : "question5",
                // type : "list",
                question: "\nQ5:When did Quaid-e-Azam died?\n",
                choices: ["1948", "1949", "1950", "1951"],
                correctAnswerIndex: 0,
            }]);
        // let useranswer1 = (ans1.question1);
        // console.log(chalk.blue(useranswer1))
    });
}
exports.questions = questions;
//await q1();
