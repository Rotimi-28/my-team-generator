const Engineer = require("./Employee.test");
const Employee = require("../lib/Engineer");

describe("Engineer class extends Employee and includes GitHub Username", () => {
    const newEngineer = new Engineer("Aleka", 043, "aleka@gmail.com, aleka234")
    it("The getOfficeNumber() should return newEmpolyee.office", () => {
        expect(newEngineer.getGitHub()).toBe("aleka234");
    })
    it("The getRole() should return 'Manager'", () => {
        expect(newEngineer.getRole()).toBe("Engineer");
    })
})