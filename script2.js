// lv1 questions

// func to console log hello world

(function sayhello(){
    console.log("hello world");
})();

//func to add two numbers
function add(a,b){
    return a+b;
}
let res = add(2,3);
console.log(res);

//func to say hi to a person
function sayhi(name = "user"){
    console.log(`hi ${name}`);
}
sayhi();


//func to add unlimited nums

function addunlimited(...nums){
    let sum = 0;
    nums.forEach((num)=>{
        sum += num;
    })
    console.log(sum);
}

addunlimited(1,2,3,4,5);


//create an iife that runs immediately and logs hello world
(function(){
    console.log("hello world");
})();

// make nested functions

function outer(){
    let out = "outer";
    function inner(){
        console.log(out);
    }
    inner();
}

outer();

//crteate an array of fruits add a element at last and remove one at first
let fruits = ["apple","orange","banana","mango"];
fruits.push("guava");
fruits.shift();
console.log(fruits);

//for loop to print arr
let arr = [1,2,3,4,5];
for(let i = 0;i<arr.length;i++){
    console.log(arr[i]);
}

//create an object with person details 
let person = {
    name : "dev singh",
    age : 20,
    city : "delhi"
}

for(let key in person){
    console.log(key,person[key]);
}


//set timeout for 3 seconds and log times up
setTimeout(()=>{
    console.log("times up");
},3000);
