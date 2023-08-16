var any = "Hi";
var any2 = "Hi";
console.log(any == any2); // predict true
console.log(any == "h1"); // predict false
var abc = "Hello world";
abc.toLowerCase();
console.log(abc);
console.log(abc == 'hello world'); // predict false
console.log(abc == 'Hello world'); // predict true
console.log((abc == 'hello world') && (any == "hello")); // predict false
console.log("after this");
console.log(abc == 'Hello world' || any == 'cc'); // predict true
var array = ["a", "B", "c"];
for (var i = 0; i < array.length; i++) {
    if (array[i] == "Z") {
        break;
    }
}
