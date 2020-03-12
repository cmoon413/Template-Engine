const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html")
const render = require("./lib/htmlRenderer")



const employeeJob = {
    type: 'list',
    name: 'job',
    message: 'What kind of employee would you like to add?',
    choices: ['Employee', 'Engineer', 'Intern', 'Manager']
}

function beginQuestions() {
    inquirer.prompt(employeeJob).then(answers => {
        switch (answers.job) {
            case 'Employee':
                console.log('success')
                break
            case 'Engineer':
                console.log('success')
                break
            case 'Intern':
                console.log('success')
                break
            case 'Manager':
                console.log('success')
                break

            default:
                console.log('I pity the wrong choice')
        }
    })
}
beginQuestions()