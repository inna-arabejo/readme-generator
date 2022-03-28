function generateMarkdown(data) {
  return `# ${data.title}

  ![GitHub license](https://img.shields.io/badge/license-${data.license}-orange.svg)

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ### Installation
  Please install the following dependencies to run the application. \n
  ${data.installation}

  ### Usage
  In order to use this application, the following requirements are met when: \n
  ${data.usage}

  ### License
  This project is covered under ${(data.license)}.

  ## Contributing
  Contribution guidelines: \n
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  For inquiries about the repo, you can find me through GitHub at [${data.github_username}](https://github.com/${data.github_username}). \n
  For any additional questions, you can reach me through email at [${data.email}](mailto:iarabejo3@gmail.com).
`;
}

module.exports = generateMarkdown;
