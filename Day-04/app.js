// Strat for loop.

// for(let i=1; i<=5; i++){
//     console.log(i);
    
// }

// for(let i =5; i>=1; i--){
//     console.log(i);
    
// }

// Print all odd numbers (1 to 15)

// for(let i=1; i<=15; i=i+2){
//     console.log(i);
// }

// console.log("backwards");

// for(let i=15; i>=1; i=i-2){
//     console.log(i);
// }


// Print Even Numbers (0 to 10)

// for(let i=0; i<=10; i=i+2){
//     console.log(i);
// }
// console.log("backwards");

// for(let i=10; i>=0; i=i-2){
//     console.log(i);
// }


// Print Multiplication Table

// let n = prompt("Enter your number");
// n = parseInt(n);
// for(let i=n; i<=n*10; i=i+n){
//     console.log(i);
// }


// Nested for loop

// for(let i=1; i<=3; i++){    
//     for(let j=1; j<=3; j++){
//         console.log(i);        
//     }
// }


// while loop

// let i = 1;
// while(i<=5){
//     console.log(i);
//     i++;
// }


// Favorite Movie

// let favMovie = "KGF"
// let guess = prompt("Guess my favorite movie")
// while((guess != favMovie)){
//     if(guess == "quit"){
//         console.log("Your quit");
//         break;
//     }
//     guess = prompt("Wrong guess. please try again")
// }
// if(guess == favMovie){
//     console.log("Congrats!!");
// }



// break keyword 

// let i = 1;
// while(i <= 5){
//     if(i === 3){
//         break;
//     }
//     console.log(i);
//     i++;
// }


// Loops with Arrays

// let fruits = ["mango", "apple", "banana", "litchi", "orange"];
// for(let i = 0; i<fruits.length; i++){
//     console.log(i, fruits[i]);
// }

// for(let i = fruits.length; i>=0; i--){
//     console.log(i, fruits[i]);
// }



// Loops with Arrays
// Nested loops with nested arrays

// let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];

// for (let i=0; i<heroes.length; i++){
//     console.log(`List #${i}`);
//     console.log(i, heroes[i], heroes[i].length);
    
//     for(let j = 0; j<=heroes.length; j++){
//         console.log(heroes[i][j]);
//     }
// }


// let student = [["Aman", 78], ["Sahil", 85], ["Karan", 96]];
// for(let i=0; i<student.length; i++){
//     console.log(`info of student #${i}` );
    
//     for(let j=0; j<student[i].length; j++){
//         console.log(student[i][j]);
//     }
// }



// for of loop

// let fruits = ["mango", "apple", "banana", "litchi", "orange"]
// for (fruit of fruits){
//     console.log(fruit);
// }

// for(char of "Sohit"){
//     console.log(char);
// }


// let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];
// for(list of heroes){
//     for(hero of list){
//         console.log(hero);
        
//     }
// }


// Create todo list
let todo = [];

let req = prompt("Please enter your request")

while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }
    else if(req=="list"){
        console.log("-----------------");
        for(let i =0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("-----------------");
    }
    else if(req == "add"){
        let task = prompt("Please enter the tast you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if(req == "delete"){
        let idx = prompt("Please enter the task index");
        todo.splice(idx, 1);
        console.log("task deleted");
    }
    else{
        console.log("Wrong request");
    }
    req = prompt("Please enter your request")
}