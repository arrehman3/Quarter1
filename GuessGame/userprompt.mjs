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
const numbergenarator_mjs_1 = __importDefault(require("./numbergenarator.mjs"));
const results_mjs_1 = __importDefault(require("./results.mjs"));
const node_banner_1 = __importDefault(require("node-banner"));
const useranswered = [];
function Banner() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, node_banner_1.default)("Guess Game", "Created by Abdur-Rehman");
    });
}
function input() {
    return __awaiter(this, void 0, void 0, function* () {
        yield Banner();
        const useranswer = yield inquirer_1.default.prompt([
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
        (0, results_mjs_1.default)(useranswered, numbergenarator_mjs_1.default);
    });
}
exports.default = input;
