// Qs. 1: Create a number variable num with some value.
// Now, print "good" if the number is divible by 10 and print "bad" if it is not.

// let num = 30;
// if (num % 10 === 0){
//     console.log("good");
// }else{
//     console.log("bad");
// }


// Qs. 2: Take the user's name & age as input prompts.
//        Then return back the following statement to the user as an alert (by substituting their name & age):
//        <name> is <age> years old.
//        [use template literals to print this sentence]

// let name = prompt("Enter your name:");
// let age = prompt("Enter your age:");
// alert(`${name} is ${age} years old.`);


// Qs. 3: Write a switch statement to print the month in a quarter.
// Months in Quarter 1: January, February, March
// Months in Quarter 2: April, May, June
// Months in Quarter 3: July, August, September
// Months in Quarter 4: October, November, December
// [use the number as the case value in switch]
// let quarter = 2;
// switch (quarter) {
//     case 1:
//         console.log("January, February, March");
//         break;
//     case 2:
//         console.log("April, May, June");
//         break;
//     case 3:
//         console.log("July, August, September");
//         break;
//     case 4:
//         console.log("October, November, December");
//         break;
//     default:
//         console.log("Invalid quarter number");
// }


// Qs. 4: A string is a golden string if it starts with the character 'A' or 'a' and has a total length greater than 5.
//        For a given string print if it is golden or not.

// let str = "Apple";
// if ((str.startsWith('A')) || (str.startsWith('a')) && (str.length > 5)){
//     console.log("The string is golden.");
// }else{
//     console.log("The string is not golden.");
// } 



// Qs. 5: Write a program to find the largest of 3 numbers.
// let a = 10;
// let b = 14;
// let c = 12;
// if (a >= b && a >= c) {
//     console.log("The largest number is: " + a);
// }else if (b >= a && b >= c) {
//     console.log("The largest number is: " + b);
// }else{
//     console.log("The largest number is: " + c);
// }
// // 2nd method
// if (a > b){
//     if (a > c) {
//         console.log("The largest number is: " + a);
//     } else {
//         console.log("The largest number is: " + c);
//     }
// }else{
//     if (b > c) {
//         console.log("The largest number is: " + b);
//     } else {
//         console.log("The largest number is: " + c);
//     }
// }


// Qs. 6: Write a program to check if 2 numbers have the same last digit.
// Eg: 32 and 2=47852 have the same last digit i.e.2

num1 = 32;
num2 = 47852;
if (num1 % 10 == num2 % 10){
    console.log("The numbers have the same last digit.", num1);
}else{
    console.log("The numbers do not have the same last digit.");
}