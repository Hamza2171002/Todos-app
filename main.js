#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue(" Welcome to Todos app "));
let todos = [];
let conddition = true;
while (conddition) {
    let todoList = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What you want to add in your Todos?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more",
            default: false
        }
    ]);
    todos.push(todoList.todo);
    conddition = todoList.addMore;
    console.log(todos);
}
