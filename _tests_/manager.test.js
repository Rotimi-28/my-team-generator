const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

describ("Manager class extends Employee and includes office number", () => {
    const newManager = new Manager("Kendra", ("081"), "kendra@yahoo.com", "29929")
    it("The getOfficeNumber() should return newEmployee.office", () => {
        expect(newManager.getOfficeNumber()).toBe("29929");

        it("The getRole() should return 'Manager'", () => {
            expect(newManager.getRole()).toBe("Manager");
        })
    })
})