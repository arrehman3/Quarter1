// let items:string[3];
function sandwich(items) {
    console.log("Sandwich has:");
    console.log("Bread");
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        console.log(item);
    }
    console.log("Bread");
}
sandwich(["a", "b", "c"]);
sandwich(["d", "e", "f"]);
sandwich(["1", "2", "3", "4"]);
