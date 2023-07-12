let array_Guest = ["Tayyab","Danish","Momina"];

for(var i = 0;i<array_Guest.length;i++)
{
    console.log("Hi "+ array_Guest[i] + " you are invited to dinner");
}
console.log("Cannot make it: "+array_Guest[0]);
array_Guest.shift();
array_Guest.unshift("Ejaz");
for(var i = 0;i<array_Guest.length;i++)
{
    console.log("Hi "+ array_Guest[i] + " you are invited to dinner");
}
