const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html")
const render = require("./lib/htmlRenderer")

var employees = []

const baseQuestions = [{
        type: 'input',
        name: 'name',
        message: "What's your name"
    },
    {
        type: 'input',
        name: 'id',
        message: "What's your id",

    },
    {
        type: 'input',
        name: 'email',
        message: "What's your email",

    }
]

const engineerQuestion = baseQuestions.concat([{
    type: 'input',
    name: 'github',
    message: "What's your github",
}])
const internQuestion = baseQuestions.concat([{
    type: 'input',
    name: 'school',
    message: "What's your School",
}])
const managerQuestion = baseQuestions.concat([{
    type: 'input',
    name: 'office',
    message: "What's your office number",
}])

const employeeEntryQuestion = {
    type: 'list',
    name: 'job',
    message: 'What kind of employee would you like to add?',
    choices: ['Engineer', 'Intern', 'Manager']
}
const repeatQuestion = {
    type: 'confirm',
    name: 'askAgain',
    message: 'Do you want to enter another employee(just hit enter for YES)?',
    default: true
}






function askEmployeeType() {
    inquirer.prompt(employeeEntryQuestion).then(answers => {
        switch (answers.job) {
            case 'Engineer':
                createEmployee(engineerQuestion)
                break
            case 'Intern':
                createEmployee(internQuestion)
                break
            case 'Manager':
                createEmployee(managerQuestion)
                break

            default:
                console.log('I pity the wrong choice')
        }
    })
}

function createEmployee() {
    console.log(engineerQuestion)
    inquirer.prompt(engineerQuestion).then(answers => {
        employees.push(answers)
        askToEnterMore()

    });
}

function askToEnterMore() {
    inquirer.prompt(repeatQuestion).then(answers => {
        if (answers.askAgain) {
            askEmployeeType()
        } else {
            console.log(employees)
            console.log('fin')
        }
    });
}


askEmployeeType()