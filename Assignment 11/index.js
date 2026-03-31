
// create index.js file 
// in that file import Employee class 
// create Object of Employee with help of Constructor and display Employee details // index.js


const Employee = require("./Employee");

// Create object using constructor
let emp1 = new Employee("Mayuri", "Changan", "mayuri@example.com", "Developer", 50000);

// Display Employee details
emp1.display();

// Using setter to update values
emp1.designation = "Senior Developer";
emp1.basicSalary = 60000;

// Using getter to display updated values
console.log("\nUpdated Employee Details:");
console.log("Designation:", emp1.designation);
console.log("Basic Salary:", emp1.basicSalary);



