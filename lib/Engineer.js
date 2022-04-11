const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
    super(name, id, email); // I think, this already exit
    this.github = github;
    }

    getRole() {
        return "Engineer"
    }

    getGitHub() {
        return this.github
    }
}

module.exports = Employee;

module.exports = Engineer;