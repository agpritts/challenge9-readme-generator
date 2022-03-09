// const fs = require('fs');

// const writeFile = data => {
//   return new Promise((resolve, reject) => {
//       fs.writeFile('./dist/README.md', data, err => {
//           if (err) {
//               reject(err);
//               return;
//           }
//           resolve({
//               ok: true,
//               message: 'README created!'
//           });
//       });
//   });
// };

const generateMarkdown = data => {
  return `# ${data.title}
  ![github license](http://img.shields.io/badge/license-${data.license}-blue.svg)
  

  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.install}
  
  ## Usage
  ${data.using}
  
  ## License
  ![github license](http://img.shields.io/badge/license-${data.license}-blue.svg)

  This project is covered under the ${data.license} license
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  Contact me with any questions:<br/>
  :octocat: [GitHub](https://github.com/${data.github})<br/>
  :email: [Email](mailto:${data.email})<br/>
  `;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   // table of contents link in readme itself
// }

// // TODO: Create a function that returns the license section of README (dictate which license was selected)
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   renderLicenseBadge();
//   renderLicenseLink();
//   renderLicenseSection();
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;

module.exports = generateMarkdown;