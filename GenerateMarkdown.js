// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "NONE") {
        return "";
    }
    const badges = {
        "Apache 2.0": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",

        "GNU General Public": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",

        "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",

        "BSD 2-Clause": "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
    };
    return badges[license] || "";
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "NONE") {
        return "";
    }
    const links = {
        "Apache 2.0": "https://opensource.org/licenses/Apache-2.0",
        "GNU General Public": "https://www.gnu.org/licenses/gpl-3.0",
        "MIT": "https://opensource.org/licenses/MIT",
        "BSD 2-Clause": "https://opensource.org/licenses/BSD-2-Clause",
    };
    return links[license] || "";
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "NONE") {
        return "";
    }
    return `## License
This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.test}

## Questions
For additional questions, you can reach me via:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}

`;
}


module.exports = generateMarkdown;