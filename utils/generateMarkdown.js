function renderLicenseChoices(license){
  
  if (license === "N/A"){
    return `Not Licensed`
  }

  if (license === "Apache"){
    return `![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)`
  }

  if (license === "IBM"){
    return `![License: IBM](https://img.shields.io/badge/License-IPL_1.0-blue.svg)(https://opensource.org/licenses/IPL-1.0)`
  }

  if (license === "MIT"){
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)`
  }

  if (license === "Mozilla"){
    return `![License: Mozilla](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)(https://opensource.org/licenses/MPL-2.0)`
  }
  
}

function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseChoices(data.license)}

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
