// 7) create file Employee.txt and append Employee Data in that file by creating Object of Employee 
const fs = require("fs");

// --- Employee Class ---
class Employee {
    constructor(firstName, lastName, email, designation, basicSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.designation = designation;
        this.basicSalary = basicSalary;
    }

    // Method to return employee details as string
    getDetails() {
        return `Employee: ${this.firstName} ${this.lastName}, Email: ${this.email}, Designation: ${this.designation}, Salary: ${this.basicSalary}\n`;
    }
}

// --- Create Employee objects ---
let emp1 = new Employee("Mayuri", "Changan", "mayuri@example.com", "Developer", 50000);
let emp2 = new Employee("Rahul", "Patil", "rahul@example.com", "Manager", 75000);
let emp3 = new Employee("Anita", "Shinde", "anita@example.com", "Tester", 40000);

// --- Append Employee data Synchronously ---
try {
    fs.appendFileSync("Employee.txt", emp1.getDetails(), "utf8");
    fs.appendFileSync("Employee.txt", emp2.getDetails(), "utf8");
    console.log("Employee data appended successfully (Synchronous).");
} catch (err) {
    console.error("Error appending file (Sync):", err);
}

// --- Append Employee data Asynchronously ---
fs.appendFile("Employee.txt", emp3.getDetails(), "utf8", (err) => {
    if (err) {
        console.error("Error appending file (Async):", err);
        return;
    }
    console.log("Employee data appended successfully (Asynchronous).");
});
