const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }
    getGithub(){
        console.log(`This employee's github account is ${this.github}`)
    }
    getRole(){
        return "Engineer"
    }
}