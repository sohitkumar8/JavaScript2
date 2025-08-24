//  Practice Questions:

// 1.Ek variable firstName banao aur apna naam store karke console.log() karo.
let firstName = "Sohit"
console.log(firstName);

// 2.Ek age variable banao let se aur usko update karo.
let age = 20;
age = 21;
console.log(age);

// 3.const country banao aur value change karke dekho. Kya hoga?
const country = "India";
// country = "USA";
console.log(country);
// Error aayega because const variable ki value change nahi kar sakte.

// 4.var city banao aur 2 baar value change karke console.log() karo.
var city = "Delhi";
city = "Mumbai";
city = "Bangalore";
console.log(city);

// 5.Ek variable price banao, undefined assign karo, phir value do aur console me print karo.
let price;
console.log(price); // undefined
price = 99;

// 6.Hoisting check karo: var se ek variable declare karo aur usko use karo declare karne se pehle.
console.log(hoistedVar); // undefined due to hoisting
var hoistedVar = "I am hoisted";

// 7.Block scope test karo: let variable block ke bahar access karke dekho.
{
    let blockVar = "I am inside block";
    console.log(blockVar); // works
}
//console.log(blockVar); // Error: blockVar is not defined    

// 8.Ek variable fullName banao, pehle firstName aur lastName alag store karke concatenate karo.
let first_Name = "Sohit";
let last_Name = "Kumar";
let fullName = `${first_Name} ${last_Name}`;
console.log(fullName);

// 9.let vs const difference samajhne ke liye ek example likho jaha const variable change karne par error aaye.
let name1 = "Rahul";
name1 = "Amit"; // works
console.log(name1);

const name2 = "Riya";
// name2 = "Neha"; // Error: Assignment to constant variable.
console.log(name2);

// 10.Ek real-life program banao jisme const appName aur let totalUsers use ho, aur 3 users add karke final result dikhao.
const appName = "Facebook";
let totalUsers = 0;
totalUsers += 3;
console.log(`App: ${appName}, Total Users: ${totalUsers}`);
