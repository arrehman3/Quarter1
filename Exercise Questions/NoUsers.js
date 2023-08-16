var username_array = ["Admin", "ar3", "cyber@2", "hacker@4"];
for (var i = 0; i < username_array.length; i++) {
    if (username_array.length < 0) {
        console.log("We need to find some Users");
    }
    else if (username_array[i] == "Admin") {
        console.log("Hello admin,would you like to see a status report");
    }
    else {
        console.log("Hello, " + username_array[i] + " thank you for logging in again");
    }
}
var length0 = username_array.length;
for (var i = 0; i < length0; i++) {
    username_array.pop();
}
console.log("Array emptied: " + username_array);
