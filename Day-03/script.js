//  Practice Questions:

// Variables in JavaScript

// 1.Ek variable firstName banao aur apna naam store karke console.log() karo.
// let firstName = "Sohit"
// console.log(firstName);

// // 2.Ek age variable banao let se aur usko update karo.
// let age = 20;
// age = 21;
// console.log(age);

// // 3.const country banao aur value change karke dekho. Kya hoga?
// const country = "India";
// // country = "USA";
// console.log(country);
// // Error aayega because const variable ki value change nahi kar sakte.

// // 4.var city banao aur 2 baar value change karke console.log() karo.
// var city = "Delhi";
// city = "Mumbai";
// city = "Bangalore";
// console.log(city);

// // 5.Ek variable price banao, undefined assign karo, phir value do aur console me print karo.
// let price;
// console.log(price); // undefined
// price = 99;

// // 6.Hoisting check karo: var se ek variable declare karo aur usko use karo declare karne se pehle.
// console.log(hoistedVar); // undefined due to hoisting
// var hoistedVar = "I am hoisted";

// // 7.Block scope test karo: let variable block ke bahar access karke dekho.
// {
//     let blockVar = "I am inside block";
//     console.log(blockVar); // works
// }
// //console.log(blockVar); // Error: blockVar is not defined    

// // 8.Ek variable fullName banao, pehle firstName aur lastName alag store karke concatenate karo.
// let first_Name = "Sohit";
// let last_Name = "Kumar";
// let fullName = `${first_Name} ${last_Name}`;
// console.log(fullName);

// // 9.let vs const difference samajhne ke liye ek example likho jaha const variable change karne par error aaye.
// let name1 = "Rahul";
// name1 = "Amit"; // works
// console.log(name1);

// const name2 = "Riya";
// // name2 = "Neha"; // Error: Assignment to constant variable.
// console.log(name2);

// // 10.Ek real-life program banao jisme const appName aur let totalUsers use ho, aur 3 users add karke final result dikhao.
// const appName = "Facebook";
// let totalUsers = 0;
// totalUsers += 3;
// console.log(`App: ${appName}, Total Users: ${totalUsers}`);


// Data types in JavaScript

// 1.Ek variable age banao, uska typeof check karo.
// let age  = 25;
// console.log(typeof age); // number

// // 2.Ek variable userName banao aur usme apna naam store karke typeof check karo.
// let userName = "Sohit";
// console.log(typeof userName); // string

// // 3.Ek variable isAdult banao aur true ya false assign karke typeof check karo.
// let isAdult = true;
// console.log(typeof isAdult); // boolean

// // 4.Ek variable emptyValue banao aur usme null assign karke typeof check karo.
// let emptyValue = null;
// console.log(typeof emptyValue); // object (this is a known quirk in JavaScript)

// // 5.Ek variable marks declare karo bina value assign kiye aur typeof check karo.
// let marks;
// console.log(typeof marks); // undefined

// // 6.typeof use karke ["HTML", "CSS"] ka data type check karo.
// let skills = ["HTML", "CSS"];
// console.log(typeof skills); // object (arrays are of type object in JavaScript)

// // 7.Ek object bike banao jisme brand, model, aur price ho. Uska typeof check karo.
// let bike = {
//     brand: "Yamaha",
//     model: "FZ",
//     price: 150000
// };
// console.log(typeof bike); // object

// // 8.Ek object car banao jisme brand, model, aur price ho. Uska typeof check karo.
// let num =  "100";
// num = Number(num);
// console.log(typeof num); // number

// // 9.Ek boolean ko string me convert karo aur typeof check karo.
// let isStudent = false;
// isStudentStr = String(isStudent);
// console.log(typeof isStudentStr); // string

// // 10.Ek program likho jo productPrice = "499" ko number me convert kare aur GST = 18% add karke final price print kare.
// let productPrice = "499";
// productPrice = Number(productPrice);
// let GST = 0.18;
// let finalPrice = productPrice + (productPrice * GST);
// console.log(`Final Price after GST: ${finalPrice.toFixed(2)}`); // Final Price after GST: 588.82

// // 11.Ek function greet() banao jo naam accept kare aur "Hello [name]" return kare. typeof greet bhi check karo.
// function greet(name) {
//     return `Hello ${name}`;
// }
// console.log(typeof greet); // function

// // 12.Ek variable big banao aur ek BigInt number store karke uska typeof print karo.
// let big = BigInt(12345678901234567890);
// console.log(typeof big); // bigint

// // 13.Ek program banao jo check kare ki koi number odd hai ya even, aur result boolean me ho.
// let number = 7;
// let isEven = (number % 2 === 0);
// console.log(isEven); // false

// // 14.Symbol() ka use karke 2 unique IDs banao aur check karo kya wo equal hain.
// let id1 = Symbol("id");
// let id2 = Symbol("id");
// console.log(id1 === id2); // false

// // 15.Ek program likho jisme typeof null ka output verify karo.
// let nullVar = null;
// console.log(typeof nullVar); // object (this is a known quirk in JavaScript)



