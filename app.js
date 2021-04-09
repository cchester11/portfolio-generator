const inquirer = require('inquirer');
const fs = require('fs');

const generatePage = require('./src/page-template.js')

const pageHTML = generatePage('name', 'github');

fs.writeFile('./index.html', pageHTML, err => {
  if (err) throw err;

  console.log('portfolio complete');
})

const promptUser = () => {
inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
};

promptUser().then(answers => console.log(answers));

