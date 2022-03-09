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
  <br/>
  :octocat: [GitHub](https://github.com/${data.github})<br/>
  <br/>
  :email: [Email](mailto:${data.email})<br/>
  `;
}

module.exports = generateMarkdown;