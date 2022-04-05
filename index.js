const templatBuilder = require("./src/template");
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const render = require('./lib/htmlRender');

// Empty arry
let team = [];

// Welcome meassage log
const welcomeMessage = `Welcome to My Team Generator!
please answer the series of prompts.
Your generator file will be added to the output folder.;`
console.log(welcomeMessage);

const prompts = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "fname",
            message: "What is your name:",
        },
        {
            type: "input",
            name: "id",
            message: "What is your ID:"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address:"
        },
        {
            type: "input",
            name: "github",
            message: "What is your github userName:"
        }
    ])
}