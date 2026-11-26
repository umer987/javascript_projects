


      

            
class QuizGame:
    def __init__(self):

///unar oprator
// let weigh =8
// let hinmet =1.89
// let result = weight * (hime+hinmet)
// console.log()


// const inquirer = require("inquirer");
// console.log("::::::::::::ADDITION CALCULATOR::::::::::::::::")
// const input1 = await inquirer.prompt({
//         name: "num1",
//         type:  "number",
//         message: "please enter number",
// });

// const input2 = await inquirer.prompt({
//     name: "num2",
//     type:  "number",
//     message: "please enter number",
// });

// let result = input1.num1 + input2.num2;
// console.log(result)



const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Enter your name: ", function (name) {
    console.log("Hello, " + name);
    rl.close(); // Close input stream
});






