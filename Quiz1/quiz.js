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
const inquirer_1 = __importDefault(require("inquirer"));
const results_mjs_1 = __importDefault(require("./results.mjs"));
const questions_mjs_1 = __importDefault(require("./questions.mjs"));
const node_banner_1 = __importDefault(require("node-banner"));
function banner() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, node_banner_1.default)("Quiz", "Created by Abdur-Rehman");
    });
}
function quiz() {
    return __awaiter(this, void 0, void 0, function* () {
        yield banner();
        let answers = [];
        for (let i = 0; i < questions_mjs_1.default.length; i++) {
            const ans = yield inquirer_1.default.prompt([
                {
                    type: "list",
                    name: "answer",
                    message: questions_mjs_1.default[i].question,
                    choices: questions_mjs_1.default[i].choices
                }
            ]);
            answers.push(questions_mjs_1.default[i].choices.indexOf(ans.answer));
        }
        const finalscore = (0, results_mjs_1.default)(answers, questions_mjs_1.default);
        // console.log("score")
        // console.log(finalscore);
        return finalscore;
    });
}
exports.default = quiz;
// console.log("h")
// const total = await quiz();
// console.log(total)
