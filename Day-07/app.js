//  JS Objects

// const student = {
//     name: "Ravi",
//     age: 21,
//     marks: 93.5
// };

// console.log(student);


// Thread / Twitter Post
// Create an object literal for the properties of thread / thread twitter post which includes -
// usename, content, likes, reposts, tags.

// const post ={
//     userName: "@samratsohit",
//     content: "This is my #firstPost",
//     likes: 150,
//     repost: 5,
//     tags: ["@apnacollege", "#delta"]
// };

// console.log(post.userName);
// console.log(post["content"]);
// console.log(post);



// Add / Update Value
// Change the city to "Mumbai"
// Add a new property, gender: "Female"
// Change the marks to "A"

// const student = {
//     name: "Sohit",
//     age: 20,
//     marks: 92.3,
//     city: "Delhi"
// };

// console.log("before change");

// delete student.marks;
// delete student.city;

// console.log(student);

// console.log("After change");

// student.city = "Mumbai";
// student.gender = "male"
// student.marks = "A"
// console.log(student);



// Object of Object
// Storing information of multiple students.

// const classInfo = {
//     aman: {
//         grade: "A+",
//         city: "Delhi"
//     },
//     soni: {
//         grade: "A",
//         city: "Pune"
//     },
//     karan: {
//         grade: "O",
//         city: "Mumbai"
//     }
// };

// classInfo.soni.city = "Gurgao";

// console.log(classInfo);



// Array of Objects
// Storing information of multiple students
// const classInfo = [
//     {
//         name: "ravi",
//         grade: "A+",
//         city: "Delhi"
//     },
//     {
//         name: "anjali",
//         grade: "A+",
//         city: "Pune"
//     },
//     {
//         name: "rohan",
//         grade: "O",
//         city: "Mumbai"
//     }
// ];

// classInfo[0].city = "Patna"; // change city 
// console.log(classInfo[0].city);
// console.log(classInfo[1].name);
// console.log(classInfo[2].grade);

// console.log(classInfo);



//      Math Object
// properties :- Math.PI, Math.E
// Methods :- Math.abs(n), Math.pow(a,b), Math.floor(n), Math.ceil(n), Math.random()



// Random integers
// form 1 to 10

// let num = Math.random();
// num = num * 10;
// num = Math.floor(num);
// num = num + 1;

// let random = Math.floor(Math.random() * 10) + 1;



// Qs.
// Generate a random number between 1 and 100.

// let random = Math.floor(Math.random() * 100) + 1;


// Generate a random number between 1 and 5.

// let random = Math.floor(Math.random() * 5) + 1;

// 21 to 25
// let random =Math.floor(Math.random() * 5) + 21;




// Guessing Game
// User enters a max number & then tries to guess a random generated number between 1 to max.


// const max = prompt("enter the max number");

// const random = Math.floor(Math.random() * max) + 1;

// let guess = prompt("guess the number");

// while(true){
//     if(guess == "quit"){
//         console.log("User quit");
//         break;
//     }

//     if(guess == random){
//         console.log("Your are right! congrats!! random number was", random);
//         break;
//     }else if (guess < random){
//         guess = prompt("Hint: your guess was too small. please try again")
//     }else{
//         guess = prompt("Hint: Your guess was too large. please try again")
//     }
// }



// Qs1. Create a program that generates a random number representing a dice roll.
//      [The number should be between 1 and 6].

// let dice = Math.floor(Math.random() * 6) +1;
// console.log(dice);


// Qs2. Create an object representing a car that stores the following properties for the
// car: name, model, color.
// Print the car’s name.

// let car ={
//     name: "TATA Harrier",
//     model: "Harreir Smart",
//     color: "black"
// }
// console.log(car.name);


// Qs3. Create an object Person with their name, age and city.
// Edit their city’s original value to change it to “New York”.
// Add a new property country and set it to the United States.

let person = {
    name: "Ranjan",
    age: 21,
    city: "patna"
};
person.city = "New York";
person.country = "United States"
console.log(person);
