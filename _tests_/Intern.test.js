const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");
 describ("Intern class extends Employee and includes School name", () => {
     const newIntern = new Intern("Rotimi", 016, "matanme@yahoo.com", "UC Berkely extension")
     it("The getSchool() should return newEmployee.office", () => {
         expect(newIntern.getSchool()).toBe("UC Berkely extension");

         it("The getRole() should return 'Intern'", () => {
             expect(newIntern.getRole()).toBe("Intern");
         })
     })
 })