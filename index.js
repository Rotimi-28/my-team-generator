const templateBuilder = require("./src/template");
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//const render = require('./lib/htmlRender');

// Empty arry
let team = [];

// Welcome meassage log
const welcomeMessage = `Welcome to My Team Generator!
please answer the series of prompts.
Your generator file will be added to the output folder.;`
console.log(welcomeMessage);

const engineerPrompts = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
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
    ]).then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        team.push(engineer)
        menu()
    })
}

const internPrompts = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
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
            name: "school",
            message: "What is the name of your school:"
        }
    ]).then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        team.push(intern)
        menu()
    })
}
//function managerPrompts() {
const managerPrompts = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
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
            name: "office",
            message: "What is your off number:"
        }
    ]).then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.office)
        team.push(manager)
        menu()
    })
}

function menu() {
    inquirer.prompt([
        {
            type: "list",
            name: "question",
            message: "what would you like to do next?",
            choices: ["Add engineer", "Add intern", "Built Team"]
        }
    ]).then((answers) => {
      if (answers.question == "Add engineer") {
          engineerPrompts()
      }
      else if(answers.question == "Add intern") {
          internPrompts()
      }
      else {
          console.log("Built Team");
          fs.writeFileSync("./dist/team.html", templateBuilder(team))
      }
    })
}

managerPrompts()