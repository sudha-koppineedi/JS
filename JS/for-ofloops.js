let fruits = ["mango" , "apple" , "banana" ,  "orange" , "litchi"];

for(i of fruits)
{
    console.log(i);
}

for(char of "apnacollege")
{
    console.log(char);
}


//nested for-of

let heroes = [["super man", "bat man" , "wonder woman"], ["irn man " , "spider man" , "thor"]];

for(list of heroes){
    for(hero of list){
        console.log(hero);
    }
}
