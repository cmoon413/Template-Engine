const Employee = require('./employee')
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.


class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
        this.role = 'Engineer'
    }
    getGithub(){
        return this.github
    }
}

module.exports = Engineer
