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

//qs why is this printing the commas?
// printName3(["1",,,"2"])
// typeguard

function padLeft (padding : number | string , input : string)
{
    if(typeof padding == 'number')
    {
        return " ".repeat(padding)+input;
    }
    return padding+input;
}

function double(x: string | number) {
    if (typeof x === 'string') {
      return x.repeat(10);
    } else {
      return x * 2;
    }
  }

console.log(double("3"));

// const req = { url: "https://example.com", method: "GET" } as const;
// handleRequest(req.url, req.method);
// The as const suffix acts like const but for the type system, ensuring that all properties are assigned the literal type instead of a more general version like string or number.

function getUsersOnlineMessage(numUsersOnline: number) {
    if (numUsersOnline) {
      return `There are ${numUsersOnline} online now!`;
    }
    return "Nobody's here. :(";
  }

console.log(getUsersOnlineMessage(8)) ; 

type anotherType = number | string;
let variable: string;
function displayId(id: anotherType) {
  if (typeof id === typeof variable) {
    return "my id is ::: " + id;
  }
  return "my id is : " + `${id.toString()}`;
}
 
// Argument of type string is passed into the function
console.log(displayId("AF565"));
 
// Argument of type number is passed into the function
console.log(displayId(565));

//type aliases id defining your own type other than the primitive type.

