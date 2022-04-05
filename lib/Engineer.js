const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(fname, id, email, github) {
    super(fname, id, email); // I think, this already exit
    this.github = github;
    }

    getRole() {
        return "Engineer"
    }

    getGitHub() {
        return this.github
    }
}

module.exports = Engineer;