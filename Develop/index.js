// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown.js');
// const generatePage = require('./src/rm-template.js');

// TODO: Create an array of questions for user input
const promptUser = () => {
    console.log(`
        ================
        README Generator
        ================
`);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'title',
            message: "What is your project's name?"
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project:'
        },
        // {
        //     type: 'checkbox',
        //     name: 'tech',
        //     message: 'What technologies/languages were used when creating this project? (Check all that apply)',
        //     choices: ['HTML', 'CSS', 'Javascript', 'jQuery', 'Bootstrap', 'Node']
        // },
        {
            type: 'list',
            name: 'license',
            message: 'What license should the project have?',
            choices: ['Apache', 'BSD', 'MIT', 'MPL', 'GNU']
        },
        {
            type: 'input',
            name: 'install',
            message: 'What command should be ran to install dependencies?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command should be ran to run tests?'
        },
        {
            type: 'input',
            name: 'using',
            message: 'What does the user need to know about using the repo?'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What does the user need to know about contributing to the repo?'
        }
    ]);
};

const writeFile = data => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'README created!'
            });
        });
    });
};





// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
promptUser()
    .then(answers => {
        return generatePage(answers);
    })
    .then(data => {
        return writeFile(data);
    })
    .catch(err => {
        console.log(err);
    });