// let items:string[3];
function sandwich(items:string[]){
    console.log("Sandwich has:")
    console.log("Bread")
    for(var item of items)
    {
        console.log(item)
    }
    console.log("Bread")
}

sandwich(["a","b","c"]);
sandwich(["d","e","f"]);
sandwich(["1","2","3","4"]);