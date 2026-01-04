let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp= document.querySelector("input");

btn.addEventListener("click", function(){
    // console.log(inp.value);
    let item = document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);

    let delbtn = document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);

     inp.value="";
});

ul.addEventListener("click", function(event){
    // console.dir(event.target.nodeName);
    // console.log("button Clicked");

    if (event.target.nodeName == "BUTTON"){
        let listitem = event.target.parentElement;
    listitem.remove();
    console.log("Deleted");
    }
});

// let delbtns = document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click", function(){
//         // console.log("deleted");
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();

// });
// }





