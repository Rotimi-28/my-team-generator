const Employee = require("./Employee");

class Intern extends Employee {
    constructor(fname, id, email, school) {
        super(fname, id, email); //This already exit
        this.school = school;
    }

    getRole() {
        return "Intern"
    }

    getSchool() {
        return this.school
    }
}

module.exports = Intern;