// EVENT AND EVENT HANDLERS
// EVENT - ANY ACTION DONE ON MAIN SCREEN
// EVENT HANDLER - FUNCTION THAT PERFORMS SPECIFIC ACTION WHEN EVENT OCCURS

let body = document.querySelector("body");
body.addEventListener("click", function () {
    console.log("body clicked");
})


let title = document.querySelector("body>h1");

function dblclickHandler() {
    title.style.color = "red";
}


title.addEventListener("dblclick", dblclickHandler)

title.removeEventListener("dblclick", dblclickHandler)

let inp = document.querySelector("#input1");
inp.addEventListener("input",function(e){
    if(e.data !== null){
        console.log(e.data);
    }
})

let h3 = document.querySelector(".select");

let select = document.querySelector("#devices");
select.addEventListener("change",function(e){
    let value = (e.target.value);

    h3.textContent = `SELECTED DEVICE IS ${value}`;
    h3.style.textTransform = "uppercase";
})

let fileinp = document.querySelector("#file1");
let btn = document.querySelector("#btn>button");
let h2 = document.querySelector("body>h2");
btn.addEventListener("click",function(){
    fileinp.click();
    
})

fileinp.addEventListener("change",function(e){
    let filename = e.target.files[0]?.name;
    if(filename){
        h2.textContent = `FILE SELECTED IS : ${filename}`;
    }
    else{
        h2.textContent = `NO FILE SELECTED`;
    }
})