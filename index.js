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
function getAnswers(answers){
    return `${answers.initialChoice}`
    
}
getAnswers();
promptUser();