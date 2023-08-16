let current_users = ["a","b","c","d","e"];
let new_users = ["1","a","2","b","3"];

function stringEqualIgnoreCase(str1:string,str2:string):boolean{
    return str1.toLowerCase()==str2.toLowerCase();
}
for(var i = 0;i<new_users.length;i++)
{
    for(var j = 0;j<current_users.length;j++)
    {
        if(stringEqualIgnoreCase(new_users[i],current_users[j]))
        {
            console.log("Enter a new username,this is already been useed")
            break;
        }
        // else{
        //     console.log("Username is available");
        // }
        
    }
    
    if(new_users[i]!=current_users[j]){
        console.log("Available");
    }    
}