//DOM - DOCUMENT OBJECT MODEL
//DOM MANIPULATION - USING JS TO CHANGE BEHAVIOUR OF ELEMENTS INSIDE BODY

var title = document.querySelector(".title");
console.log(title);
console.dir(title);

title.innerHTML = "<i>DOM MANIPULATION - CHANGING TEXT</i>"; // changes the innerhtml element with tags
let a = document.querySelector("a");
a.href = "https://www.google.com"; // this changes the attr value of an element

let img = document.querySelector("img");
console.log(img.getAttribute("src")); // this gets the attr value of an element
img.setAttribute("src","https://images.unsplash.com/photo-1540655037529-dec987208707?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1221")
img.removeAttribute("alt");
var title2 = document.querySelector("#title2");
console.log(title2);
console.dir(title2);

// we can also use document.queryselectorbyId and document.queryselectorbyclassname

//Create element with append and prepend

let h3 = document.createElement("h3");
h3.innerHTML = "I am a h3 element";
document.body.appendChild(h3); // this will add at last
// document.body.prepend(h3); // this will add at first

let h1 = document.createElement("h1");
h1.innerHTML = "I am a h1 element";
document.querySelector(".div").appendChild(h1); // this will add at last

// changin style using js

h1.style.color = "red";
h1.style.backgroundColor = "yellow";
h1.style.fontSize = "130px";

//classList

let h4 = document.createElement("h4");
h4.innerHTML = "I am a h4 element";
document.querySelector("body").appendChild(h4);
h4.classList.add("hui"); // this will apply css effect of hui class from stylesheet
h4.classList.toggle("hui"); // this will apply/remove css effect of hui class from stylesheet
h4.classList.remove("hui"); // this will remove css effect of hui class from stylesheet
