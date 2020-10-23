const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown.js")

// array of questions for user
const options = [
{
    type: "input",
    name: "title",
    message: "What is your project title?"
},
{
    type: "input",
    name: "description",
    message: "What is your project description?"
},
{
    type: "input",
    name: "installation",
    message: "How can one install your application?"
},
{
    type: "input",
    name: "usage",
    message: "Please provide any information about using your project."
},
{
    type: "list",
    name: "license",
    message: "Please pick a license",
    choices: ["MIT", "Apache"]
},
{
    type: "input",
    name: "contributors",
    message: "Please list the project contributors."
},
{
    type: "input",
    name: "test",
    message: "How do you run tests for this project?"
},
{
    type: "input",
    name: "email",
    message: "What is your email?"
},
{
    type: "input",
    name: "github",
    message: "What is your github username?"
}
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(options) 

    .then(answers => {
        writeToFile("README.md", generateMarkdown(answers))
    })
}  

// function call to initialize program
init();

