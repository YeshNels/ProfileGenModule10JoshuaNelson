class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        console.log(`This employee is named ${this.name}`)
    }
    getId() {
        console.log(`This employee has the id ${this.id}`)
    }
    getEmail() {
        console.log(`This employee can be contacted at ${this.email}`)
    }
    getRole() {
        return "Employee"
    }
}
module.exports = Employee