//narrowing works with union
function printName(id) {
    console.log("Your Id Is:" + id);
}
// printName(101);
// printName("SFDS");
function printName2(id) {
    if (typeof id == "number") {
        id += 2;
    }
    else {
        console.log(id);
    }
}
//for array typeof dosent work..
function printName3(id) {
    if (Array.isArray(id)) {
        console.log("Hello, " + id);
    }
    else {
        console.log(id);
    }
}
//qs why is this printing the commas?
// printName3(["1",,,"2"])
// typeguard
function padLeft(padding, input) {
    if (typeof padding == 'number') {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}
function double(x) {
    if (typeof x === 'string') {
        return x.repeat(10);
    }
    else {
        return x * 2;
    }
}
console.log(double("3"));
// const req = { url: "https://example.com", method: "GET" } as const;
// handleRequest(req.url, req.method);
// The as const suffix acts like const but for the type system, ensuring that all properties are assigned the literal type instead of a more general version like string or number.
function getUsersOnlineMessage(numUsersOnline) {
    if (numUsersOnline) {
        return "There are ".concat(numUsersOnline, " online now!");
    }
    return "Nobody's here. :(";
}
console.log(getUsersOnlineMessage(8));
var variable;
function displayId(id) {
    if (typeof id === typeof variable) {
        return "my id is ::: " + id;
    }
    return "my id is : " + "".concat(id.toString());
}
// Argument of type string is passed into the function
console.log(displayId("AF565"));
// Argument of type number is passed into the function
console.log(displayId(565));
