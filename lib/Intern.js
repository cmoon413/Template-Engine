const Employee = require('./Employee.js')

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    constructor(name, id, email, School){
           super(name, id, email)
           this.School = School
           this.role = 'Intern'
       }
       getSchool(){
           return this.School
       }
   
   
   }
   
   
   
   
   module.export = Intern