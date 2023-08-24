

const hello = () => {
    return "Hello World";
};
// const obj =>({
//     return "hi"
// })
// const division = (a, b) => a / b;
// console.log(division(10, 2));
// const subtraction = (a, b) => a - b;
// console.log(subtraction(50, 250));
// const add = (a) => {
//     console.log(a);
// };
// add("abbbcgct");

async function makeTea()
{
    await new Promise ((resolve)=>{
        setTimeout(resolve,10000);
    })
    console.log('"The tea is ready"');
}
async function boilEgg(){
    await new Promise ((resolve)=>{
        setTimeout(resolve,1000);
    })
    console.log('Ready Egg');
}    

async function makeJuice(){
    await new Promise ((resolve)=>{
        setTimeout(resolve,1000);
    })
    console.log('"Juice Ready"');
    
}
async function serve (){
    await new Promise ((resolve)=>{
        setTimeout(resolve,5000);
    })
    console.log('"Breakfast  serving"');
}

 const makeBreakfast=async()=>{
    await makeTea();
    await makeJuice();
    await boilEgg();
    await serve();
    console.log("Breakfast ready and served");
}

makeBreakfast();