// quiz.....incquirer,chalk,node-banner
//-D for developement,types for all types recogniction
//npm i @types/node -D
//npm i @types/chalk -D
/*npm i @types/inquirer -D
node banner no types
npm i @types/node-banner -D
added dependencies
inquirer dor input from user
npm i inquirer
types in development because only necessary in production.
developmnet dependencies only for development
*/
import inquirer from 'inquirer';
import chalk from 'chalk';
import showBanner from 'node-banner';
import result from './result.js';
import { q1 } from './question.js';


(async () => {
     await showBanner('QUIZ',"");   
})(); // Immediately Invoked Function Expression (IIFE) means execution first,function expression not declared

let answer1 = await q1();
//console.log(answer1);
let score = await result (answer1)
console.log(score);