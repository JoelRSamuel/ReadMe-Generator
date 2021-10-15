// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the Project title?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Describe the project:',
        name: 'describe',
      },
      {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation', 
      },
      {
        type: 'input',
        message: 'How does this application function?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'What are the guidelines for contribution?',
        name: 'contribution', 
      },
      {
        type: 'input',
        message: 'What are the testing instructions?',
        name: 'testing', 
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    generateMarkdown(data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log(response)
            writeToFile("READMEtest.md",response);

          }
          );
}

// Function call to initialize app
init();
