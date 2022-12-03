const inquirer = require("inquirer");
const fs =require("fs");

const generateHTML = ({/*the variables from inquirer go here*/}) =>
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Employee Profiles>
    </head>
    <body>
    </body>
    </html>`;

inquirer
    .prompt([
        {
            type: "input",
            name: "managerName",
            message: "Who is the manager for this project",
        },
        {
            type: "input",
            name: "managerID",
            message: "What is the manager's ID?",
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's e-mail?"
        },
        {
            type: "input",
            name: "managerOffice",
            message: "What is the manager's office number?",
        },
        {
            type: "list",
            name: "future",
            message: "What would you like to do?",
            choices: [
                "Add an engineer",
                "Add an intern",
                "Stop adding employees and generate a profile"
            ],
        },
    ])