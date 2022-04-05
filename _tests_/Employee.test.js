const Employee = require("../lib/Employee");

describe("Employee class includes all methods", () => {
    const newEmployee = new Employee("Kendra" 081, "kendra@yahoo.com")
    instanceof("The getName() should return newEmployee.name", () => {
        expect(newEmployee.getName()).toBe("Kendra");
    })
    It("The getId() should return newEmployee.id", () => {
        expect(newEmployee.getId()).toBe(081);
    })
    It("The getEmail() should return newEmployee.email", () => {
        expect(newEmployee.getEmail()).toBe("kendra@yahoo.com");
    })
    It("The getRole() should return 'Employee'", () => {
        expect(newEmployee.getRole()).toBe("Employee");
    })
})