import showBanner from 'node-banner';
import result from './result.js';
import { q1 } from './question.js';
(async () => {
    await showBanner('QUIZ', "");
})(); // Immediately Invoked Function Expression (IIFE) means execution first,function expression not declared
let answer1 = await q1();
//console.log(answer1);
let score = await result(answer1);
console.log(score);
