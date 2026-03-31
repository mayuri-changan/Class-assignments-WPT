// <!-- in Employee.js file 
// create Employee class 
//  take firstName , lastName , email , designation 
//   basicSalary 
// input from constructor 

// in Employee class 
//   write display method which display employee details
// write setter and getter methods for each variable 

// create index.js file 
// in that file import Employee class 
// create Object of Employee with help of Constructor and display Employee details  -->


// Employee.js
class Employee {
    constructor(firstName, lastName, email, designation, basicSalary) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._designation = designation;
        this._basicSalary = basicSalary;
    }

    // Display method
    display() {
        console.log("Employee Details:");
        console.log("First Name:", this._firstName);
        console.log("Last Name:", this._lastName);
        console.log("Email:", this._email);
        console.log("Designation:", this._designation);
        console.log("Basic Salary:", this._basicSalary);
    }

    // Getter & Setter for firstName
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }

    // Getter & Setter for lastName
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }

    // Getter & Setter for email
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }

    // Getter & Setter for designation
    get designation() {
        return this._designation;
    }
    set designation(value) {
        this._designation = value;
    }

    // Getter & Setter for basicSalary
    get basicSalary() {
        return this._basicSalary;
    }
    set basicSalary(value) {
        this._basicSalary = value;
    }
}

// Export the class
module.exports = Employee;
