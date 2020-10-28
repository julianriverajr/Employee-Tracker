const mysql = require("mysql");
const inquirer = require("inquirer");

function promptUser() {
    return inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            choices: ['add a department', 'add a role', 'add an employee', 'view departments', 'view roles', 'view all employees', 'update employee roles'],
            name: "initialChoice"
        }
    ])
};