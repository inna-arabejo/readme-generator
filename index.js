// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
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
      name: "license"
    },

    {
      type: "input",
      message: "What are the contribution guidelines?",
      name: "contributing"
    },

    {
      type: "input",
      message: "What are the instructions to test this application?",
      name: "tests"
    },

    {
      type: "input",
      message: "Enter your GitHub username for any questions a user may have.",
      name: "github_username"
    },

    {
      type: "input",
      message: "Enter your email address for any additional questions a user may have.",
      name: "email"
    },
    

  ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
