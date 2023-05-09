#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
const welCome = async () => {
    console.log(chalk.greenBright(figlet.textSync("ATM \n")));
};
await welCome();
let balance = 10000;
inquirer
    .prompt([
    {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: ["Check balance", "Withdraw money", "Deposit money", "Exit"],
    },
])
    .then((answers) => {
    switch (answers.action) {
        case "Check balance":
            console.log(`Your balance is $${balance}`);
            break;
        case "Withdraw money":
            inquirer
                .prompt([
                {
                    type: "number",
                    name: "amount",
                    message: chalk.yellow("How much would you like to withdraw?"),
                    validate: (value) => value <= balance,
                },
            ])
                .then((answers) => {
                balance -= answers.amount;
                console.log(`Your new balance is $${balance}`);
            });
            break;
        case "Deposit money":
            inquirer
                .prompt([
                {
                    type: "number",
                    name: "amount",
                    message: chalk.red("How much would you like to deposit?"),
                },
            ])
                .then((answers) => {
                balance += answers.amount;
                console.log(`Your new balance is $${balance}`);
            });
            break;
        case "Exit":
            console.log(chalk.blue("Thank you for using our ATM!"));
            break;
    }
});
