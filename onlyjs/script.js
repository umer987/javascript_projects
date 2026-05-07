// var a ="umer"
// var b ="shakir"
// console.log("my name is "+ `${a}`+" " +`${b}`)
// console.log("my name is " +a+" "+b)




///unary opratorss
// let weight =84
// let hinmet =1.8288
// let result = weight / (hinmet*hinmet)
// console.log(result);


// const inquirer = require("inquirer");
// console.log(":::::::::::::::ADDITION CALCULATOR::::::::::::::::")
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




// let formate_change = "hello eric you are finding python toturials"
// console.log("the orignal form: ",formate_change)
// let upperlette=formate_change.toUpperCase
// let lower = formate_change.toLowerCase

// console.log("the upperletter form: ",upperlette)
// console.log("the lower form: ", lower)
// console.log("the titlecase form: ",formate_change.replace(/\b\w/g, char => char.toUpperCase()))


