const Employee = require("./Employee");


class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super (name, id, email)
        this.officeNumber = officeNumber
    }
    printInfo() {
        console.log(`office number: ${this.officeNumber}`);
      }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole(){
        return "Manager"
    }
}



module.exports = Manager;