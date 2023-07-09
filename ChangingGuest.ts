let array_Guest = ["Tayyab","Danish","Momina"];
array_Guest.shift();
array_Guest.unshift("Ejaz");
for(var i = 0;i<array_Guest.length;i++)
{
    console.log("Hi "+ array_Guest[i] + " you are invited to dinner");
}