//narrowing works with union
function printName( id : number | string)
{
    console.log("Your Id Is:"+id);
}

// printName(101);
// printName("SFDS");

function printName2(id: number | string)
{
    if(typeof id == "number")
    {
       id+=2;
    }
    else{
        console.log(id);
    }
}

//for array typeof dosent work..
function printName3(id : string[] | string)
{
    if (Array.isArray(id))
    {
        console.log("Hello, "+id);
    }
    else{
        console.log(id)
    }
}

printName3(["1","2"])
