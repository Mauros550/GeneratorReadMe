// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./GenerateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description of your project",
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install this project?",
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use this project?",
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your project:",
        choices: ["Apache 2.0","GNU General Public","MIT","BSD 2-Clause","NONE"],
    },
    {
        type: "input",
        name: "contributing",
        message: "How can others contribute to this project",
    },
    {
        type: "input",
        name: "test",
        message: "What are the test instructions?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
   
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error("Error Writing file:",err);
        } else {
            console.log("README.md successfully generated!");
        }
    });
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) =>{
        const readmeContent = generateMarkdown(answers);
        writeToFile("README.md",readmeContent);
    });
}


// Function call to initialize app
init();