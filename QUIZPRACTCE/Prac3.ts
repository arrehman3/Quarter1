function anyfunction (a:number,...b:number[])
{
    let sum = a;

    for(const i of b)
    {
        sum+=i;
    }

    return sum;
}
const philosopher = "Hypatia";

//falsy
//false, 0, -0, 0n, "", null, undefined, and NaN

let biologist = Math.random() > 0.5 && "Rachel Carson";
if (biologist) {
biologist; // Type: string
} else {
biologist; // Type: false | string
}

//Variables declared without an initial value default to undefined 