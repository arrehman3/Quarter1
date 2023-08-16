let array_Guest2 = ["Tayyab","Danish","Momina","Arham","Ali","Rafi"];

for(var i = 0;array_Guest2.length>2;i++)
{
    let temp = array_Guest2.pop();
    console.log("Sorry "+ temp + " i cant invite you, hope you understand");
}
for(var i = 0;i<array_Guest2.length;i++)
{
    console.log(array_Guest2[i]+" you guys should mark your present");
}

for (var i = 0;array_Guest2!=null;i++)
{
    array_Guest2.pop();
}

console.log(array_Guest2);