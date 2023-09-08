#!/usr/bin/env node
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
const add_mjs_1 = __importDefault(require("./add.mjs"));
const subtract_mjs_1 = __importDefault(require("./subtract.mjs"));
const multiplication_mjs_1 = __importDefault(require("./multiplication.mjs"));
const division_mjs_1 = __importDefault(require("./division.mjs"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const answer = yield inquirer_1.default.prompt([
            {
                type: "number",
                name: "n1",
                message: "Please Enter N1: "
            },
            {
                type: "number",
                name: "n2",
                message: "Please Enter N2: "
            },
            {
                type: "list",
                name: "operator",
                message: "Please Select",
                choices: ["ADD", "SUBTRACT", "MULTIPLY", "Divide"]
            }
        ]);
        if (answer.operator === "ADD") {
            console.log((0, add_mjs_1.default)(answer.n1, answer.n2));
        }
        else if (answer.operator === "SUBTRACT") {
            console.log((0, subtract_mjs_1.default)(answer.n1, answer.n2));
        }
        else if (answer.operator === "MULTIPLY") {
            console.log((0, multiplication_mjs_1.default)(answer.n1, answer.n2));
        }
        else {
            console.log((0, division_mjs_1.default)(answer.n1, answer.n2));
        }
    });
}
let continueee;
do {
    // console.log('hiiii');
    // console.log(figlet.textSync("Calculator",{font:"Bloody"}))
    await main();
    continueee = await inquirer_1.default.prompt([
        {
            type: "confirm",
            name: "continue",
            message: "Do you want to continue? "
        }
    ]);
} while (continueee.continue);
