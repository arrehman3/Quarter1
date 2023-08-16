
function make_shirt(size:string="Large",text:string="I love TypeScript"):string
{
    return "size of the shirt is "+size+"\nMessage is : "+text;
}

console.log(make_shirt());
console.log(make_shirt("medium"));
console.log(make_shirt("small","hi there"));
export{}