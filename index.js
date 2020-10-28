const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "fastSnail99440",
    database: "employee_tracker_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

async function promptUser() {
    let questions = await inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            choices: ['add a department', 'add a role', 'add an employee', 'view departments', 'view roles', 'view all employees', 'update employee roles'],
            name: "initialChoice"
        }
    ]);
    console.log("You've chosen " + questions.initialChoice);
    if (questions.initialChoice === 'add a department'){
        deptQs();
    }
    else if (questions.initialChoice === 'add a role'){
        roleQs();
    }
    else if (questions.initialChoice === 'add an employee'){
        employeeQs();
    }
    else if (questions.initialChoice === 'view departments'){
        viewDepts();
    }
    else if (questions.initialChoice === 'view roles'){
        viewRoles();
    }
    else if (questions.initialChoice === 'view all employees'){
        viewEmployees();
    }
    else if (questions.initialChoice === 'update employee roles'){
        updateEmployeeRoles();
    }
    else return;
};

async function deptQs(){
    let deptQuestions = await inquirer.prompt([
        {
            type: "input",
            message: "What is this new department's name?",
            name: "newDeptName"
        }
    ]);
    console.log("You've named the new department " + deptQuestions.newDeptName);
};

async function roleQs(){
    let roleQuestions = await inquirer.prompt([
        {
            type: "input",
            message: "What is the name of this new role?",
            name: "newRoleName"
        }
    ]);
    console.log("You've named the new role " + roleQuestions.newRoleName);
}

promptUser();