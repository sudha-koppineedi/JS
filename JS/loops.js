// for(let i=0;i<=5;i++)
// {
//     console.log
// }



// //infinite loops
// for(let i=0;i<=5;i--){

// }
// for(let i=1; ;i++){

// }
// for(let i=0;i>=0;i++){

// }


// let fruits = ["mango", "apple", "banana", "lichi" , "orange"];

// for(let i=0;i<fruits.length;i++)
// {
//     console.log(i, fruits[i]);
// }



//nested loops in nested arrays
let heroes =[["ironman","spiderman","thor"] , ["superman","wonder woman", "flash"]];

for(let i=0;i<heroes.length;i++)
{
    console.log(i , heroes[i]);
    for(let j=0;j<heroes[i].length;j++)
    {
        // console.log(j, heroes[i][j]);
        console.log(`j=${j}, ${heroes[i][j]}`)
    }
}