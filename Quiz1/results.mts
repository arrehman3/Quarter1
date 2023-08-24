import question from "./questions.mjs";
const score = (answers:number[],question:any)=>{
    let quizscore = 0;
    for (let i=0;i<question.length;i++)
    {
        if(answers[i]===question[i].correctAnswerIndex)
        {
            quizscore++;
        }
    }
    return quizscore;
}

export default score;