// This is first program

// console.log("Hello, World!");


// Template literals

// let a = 10;
// let b = 20;
// console.log("price is", a+b ,"rupees");
// console.log(`price is ${a + b} rupees`);
// let output = `price is ${a + b} rupees`;
// console.log(output);


// Operators in JavaScript
// Arithmetic Operators

let a = 10;
let b = 5;
// console.log(a + b); // Addition
// console.log(a - b); // Subtraction
// console.log(a * b); // Multiplication
// console.log(a / b); // Division
// console.log(a % b); // Modulus
// console.log(a ** b); // Exponentiation (a raised to the power of b)

// console.log(+a); // Unary plus (no effect on number)
// console.log(-a); // Unary minus (negates the number)
// console.log(a++); // Post-increment
// console.log(a--); // Post-decrement
// console.log(++a); // Pre-increment
// console.log(--a); // Pre-decrement


// Comparison Operators
// console.log(a == b); // Equal to
// console.log(a != b); // Not equal to
// console.log(a === b); // Strict equal to (checks value and type)
// console.log(a !== b); // Strict not equal to (checks value and type)
// console.log(a > b); // Greater than
// console.log(a < b); // Less than
// console.log(a >= b); // Greater than or equal to
// console.log(a <= b); // Less than or equal to

// Logical Operators
// console.log(a > 5 && b < 10); // Logical AND
// console.log(a > 5 || b < 10); // Logical OR
// console.log(!(a > 5)); // Logical NOT

// let marks =75;
// if(marks > 33 && marks >= 80 || !false){
//     console.log("You have passed the exam.");
    
// }else{
//     console.log("You have failed the exam.");
// }


// Conditional Statements
// let age = 23;
// if (age >= 18){
//     console.log("You are eligible to vote.");  
// }

// Practice Qs
// Qs.1: Create a traffic light system that shows to do based on color.
// let trafficLight = "yellow";
// if (trafficLight === "red") {
//     console.log("Stop");
// }
// if (trafficLight === "yellow") {
//     console.log("Get Ready");
// }
// if (trafficLight === "green") {
//     console.log("Go");
// }

// else if Sataements
// let age =16;
// if (age >= 18) {
//     console.log("You are eligible to vote.");
// }
// else if (age < 18) {
//     console.log("You are not eligible to vote.");
// }

// Ternary Operator
// let age = 16;
// let eligibility = (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote.";
// console.log(eligibility);

//  else statement
// let age = 16;
// if (age >= 18) {
//     console.log("You are eligible to vote.");
// }else {
//     console.log("You are not eligible to vote.");
// }


// let color = "green";
// if(color === "red"){
//     console.log("Stop");
// }
// else if(color === "yellow"){
//     console.log("Slow Down");
// }
// else if(color === "green"){
//     console.log("Go");
// }else{
//     console.log("traffic light is not working");
    
// }


// Qs. 2: Create a system to calculate te popcorn prices based on the size customer asked for :
// if size is 'XL', price is Rs 250
// if size is 'L', price is Rs 200
// if size is 'M', price is Rs 100
// if size is 'S', price is Rs 50

// let size = "L";
// if (size === "XL") {
//     console.log("Price is Rs 250");
// }
// else if (size === "L") {
//     console.log("Price is Rs 200");
// }
// else if (size === "M") {
//     console.log("Price is Rs 100");
// }else{
//     console.log("Price is Rs 50");
// }


// Nested if-else Statements
// let marks =45;
// if (marks >= 33){
//     console.log("You have passed the exam.");
//     if (marks >= 80){
//         console.log("Grade : O");
        
//     }else{
//         console.log("Grade : A");
        
//     }
// }else{
//     console.log("You have failed the exam.");
    
// }


// Qs. 3: A "good string" is a string that starts with the letter 'a' & has a length > 3. Write a Program to find if a string is good or not.
// let str = "apple";
// if(str[0] === 'a' && str.length >3){
//     console.log("The string is good.");
// }else{
//     console.log("The string is not good.");
// }


// Qs. 4: Predict the output of following code
// let num = 12;
// if ((num%3 === 0) && (num+1 === 15) || (num-1 === 11)) {
//     console.log("safe");
// }else{
//     console.log("unsafe");
// }


// truthy & falsy
// let str = " ";
// if (str){
//     console.log("string is not empty");
// }else {
//     console.log("string is empty");
// }

// let num = 0 ;
// if (num){
//     console.log("num is not equal to 0");
// }else{
//     console.log("num is equal to 0");
// }


// Switch Statement
// let color = "yellow";
// switch(color){
//     case "red":
//         console.log("Stop");
//         break;
//     case "yellow":
//         console.log("Slow down");
//         break;
//     case "green":
//         console.log("GO");
//         break;
//     default:
//         console.log("Slow down");
// }


// Qs. 5: Use switch statement to print the day of the week using a number variable 'day' with
// values 1 to 7.
//  1= Monday, 2 = Tuesday & so on
// let day = 3;
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
//         break;
// }


//Alert & Prompt

// alert("Welcome to Day 01 of JavaScript!");
let firstname = prompt("Please enter your first name:");
let lastname = prompt("Please enter your last name:");
alert(`Welcome ${firstname} ${lastname}!`);
console.log(`Welcome ${firstname} ${lastname}!`);


console.log("This is a simple log");
console.error("This is an error message");
console.warn("This is a warning message");
