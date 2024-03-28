#!  /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 25000; // the balance of the user's account.
let myID = 2345; // The ID number for each new customer
let myPin = 2345; // the pin number for the users account.
let IDAnswer = await inquirer.prompt([
    {
        type: "input",
        name: "idNumber",
        message: "Please enter your ID Number:"
    }
]);
myID = IDAnswer.idNumber;
{
    console.log(`Your ID is correct: ${myID}`);
}
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin code:",
        type: "number",
    }
]);
if (pinAnswer.pin == myPin) {
    console.log("Correct pin code:");
    console.log(`Your Balance is ${myBalance}`);
    let actionAnswers = await inquirer.prompt([
        {
            name: "action",
            type: "list",
            message: "please select an action to perform: ",
            choices: ['deposit', 'withdrawal', 'check balance',]
        }
    ]);
    console.log();
    if (actionAnswers.action === "withdrawal") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                message: "select amount:",
                choices: [1000, 5000, 10000, 15000, "Other amount"],
            }
        ]);
        if (amountAnswer.amount === "Other amount") {
            let other_amount = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "enter amount:",
                }
            ]);
            if (other_amount.amount > 25000) {
                console.log("your only can withdrawal 25000 at a time:");
            }
            let NewBalance = myBalance - other_amount.amount;
            console.log(`your new balance is: ${NewBalance}`);
        }
        else {
            let NewBalance = myBalance - amountAnswer.amount;
            console.log(`your new balance is: ${NewBalance}`);
        }
    }
    else if (actionAnswers.action === "check balance") {
        console.log(`your balance is: ${myBalance}`);
    }
    else if (actionAnswers.action === "deposit") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "your account number:",
                type: "number"
            }
        ]);
        if (amountAnswer.amount) {
            console.log("Your account number incorrect:");
        }
    }
}
else {
    console.log("Incorrect pin code:");
}
