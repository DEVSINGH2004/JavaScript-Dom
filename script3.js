// JS Lv. 2 Questions

//1. create a high order function that takes a function as an argument and runs it twice

function runtwotimes (func){
    func();
    func();
}

runtwotimes(function(){
    console.log("hello world");
})

//2. create a pure and impure function using global variable 

//pure func - gives same output for same input
let glo_var = 10;
function pure(){
    let local_var = glo_var;
    console.log(`this is pure function ${local_var}`);
}
pure();

//impure func - gives different output for same input
function impure(){
    glo_var++;
    console.log(`this is impure function ${glo_var}`);
}
impure();

//3. write a function which uses object destructuring to give users name and age
let person = {
    name : "shrey",
    age : 20,
    email : "shrey@gmail.com"
}

function getdetails({name,age}){
    console.log(`name is ${name} and age is ${age}`);
}

getdetails(person);

//this - it is a dynammic keyword that refers to the object that is calling the function

//4. use map() to create a new arr where each element is squared

let arr = [2,4,6,8];

let squared = arr.map((num)=>{
    return num*num;
})

console.log(squared);

//5. use filter() to create a new arr with only even nums

let even = arr.filter((num)=>{
    return num%2 == 0;
})

console.log(even);

//6. use reduce to find the total salary

let salary = [1000,2000,3000,4000];

let total = salary.reduce((i,val)=>{
    return i+val;
})

console.log(total);

//7. use some() and every() to check if all name is longer than 3 characters

let naam = ["shy","ananya","akshay","akansha"];

let somenames = naam.some((name)=>{
    return name.length > 3;
})

console.log(somenames);

let allnames = naam.every((name)=>{
    return name.length > 3;
})

console.log(allnames);

//8. check behaviur of object user by using seal() and freeze()

let user = {
    name : "shrey",
    age : 20,
    email : "shrey@gmail.com"
}

//seal() - prevents new properties from being added to object and marks all existing properties as non-configurable
Object.seal(user);
user.name = "shy";
user.social = "twitter"; // this will not be added
console.log(user);

//freeze() - prevents new properties from being added to object and marks all existing properties as non-configurable and non-writable
Object.freeze(user);
user.name = "shrey"; // this will not be added
user.social = "insta"; // this will not be added
console.log(user);

//9. create a nested object (user->address->city) and access city
let people = {
    name:"dev",
    age:23,
    gender:"male",
    address:{
        house:"40",
        street:"main street",
        
        city:{
            name:"delhi",
            pincode:110001
        }
        
    }
}

console.log(people.address?.city?.name); //?-optional chaining