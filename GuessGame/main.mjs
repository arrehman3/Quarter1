#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userprompt_mjs_1 = __importDefault(require("./userprompt.mjs"));
const inquirer_1 = __importDefault(require("inquirer"));
let cont;
do {
    await (0, userprompt_mjs_1.default)();
    cont = await inquirer_1.default.prompt([
        {
            type: "confirm",
            name: "continue",
            message: "Wanna try again? "
        }
    ]);
} while (cont.continue);
