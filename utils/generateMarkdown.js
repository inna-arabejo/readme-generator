// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  https://github.com/${data.github_username}/${data.title}

  # Description
  ${data.description}

  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * 
  # Installation
  Please install the following dependencies to run the application.
  ${data.installation}

  # Usage
  In order to use this application, the following requirements are met when:
  ${data.usage}

  # License
  This project is covered under the ${data.license} license.

  # Contributing
  Contribution guidelines:
  ${data.contributing}

  # Tests
  To run this test, the following requirements are needed:
  ${data.tests}

  # Questions
  


`;
}

module.exports = generateMarkdown;
