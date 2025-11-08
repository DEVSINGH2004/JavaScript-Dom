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
img.classList.add("img");
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


//Practice Questions

//1. diff between element node and text node
//element node - it is a tag and it has attributes and child nodes
//text node - it is a text inside a tag and it has no attributes and no child nodes

//2. diff between query selector and get element by id
//query selector - it selects element using css selector
//get element by id - it selects element using id attribute

//3. select li items and print their text content using loop
let li = document.querySelectorAll(".list>ul>li");
for(let i=0;i<li.length;i++){
    console.log(li[i].textContent);
}

//4. diff between innerHTml , texcontent and innertext
//innerHTml - it returns html content of an element
//texcontent - it returns text content of an element
//innertext - it returns visible text content of an element

//5. when should you use textcontent and innertext
//textcontent - it is used to get or set text content of an element - it is faster too
//innertext - it is used to get or set visible text content of an element

//6. add title attribute to h1 element through js 
let head = document.querySelector(".title");
head.setAttribute("title","dom manipulation");

//7. remove child node of a parent
let ul = document.querySelector(".list>ul");
ul.removeChild(li[0]);
let newli = document.createElement("li");
newli.textContent = "added through js";
ul.appendChild(newli);

//8. make a img with placeholder attr and add it at the top
let img2 = document.createElement("img");
img2.setAttribute("src","https://images.unsplash.com/photo-1761872936081-344b9b67cedc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170");
img2.classList.add("img");
document.querySelector("body").prepend(img2);

//9. toggle highlight class on even li items

let evenLi = document.querySelectorAll(".list>ul>li:nth-child(2n)");
console.log(evenLi);
evenLi.forEach(function(i){
    i.classList.toggle("highlight");
})
