// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require("path");


// TODO: Create an array of questions for user input
function init() {
  inquirer.prompt([
    
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title"
    },

    {
      type: "input",
      message: "What is your project about? Be descriptive.",
      name: "description"
    },

    {
      type: "input",
      message: "Table of Contents.",
      name: "table of contents"
    },

    {
      type: "input",
      message: "What will the user need to install to run this application?",
      name: "installation"
    },

    {
      type: "input",
      message: "What are the instructions to use this application?",
      name: "usage"
    },

    {
      type: "input",
      message: "Which of the following license is this application covered under?",
      name: "license",
      choices: [
        "N/A",
        "Apache 2.0",
        "IBM Public License Version 1.0",
        "MIT",
        "Mozilla Public License 2.0"
      ]
    },

    {
      type: "input",
      message: "What are the contribution guidelines?",
      name: "contributing"
    },

    {
      type: "input",
      message: "How can a user test this application?",
      name: "tests"
    },

    {
      type: "input",
      message: "Enter your GitHub username for questions a user may have.",
      name: "github_username"
    },

    {
      type: "input",
      message: "Enter your email address for any additional questions a user may have.",
      name: "email"
    }
    
  ]).then(function(data){
    console.log(data)
    writeToFile("README.md", generateMarkdown({...data}));
    console.log("You have successfully completed your README generator. Enjoy!")
  })
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function call to initialize app
init();