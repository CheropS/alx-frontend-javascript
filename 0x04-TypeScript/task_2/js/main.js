// Implement the function
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
// Implement the StudentClass
var StudentClass = /** @class */ (function () {
    function StudentClass(_a) {
        var firstName = _a.firstName, lastName = _a.lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
// Implement the Director class
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
// Implement the Teacher class
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
// Function to create an Employee instance
function createEmployee(salary) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
// Type predicate function to check if an employee is a Director
function isDirector(employee) {
    return employee instanceof Director;
}
// Function to execute the correct work method
function executeWork(employee) {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    }
    else {
        console.log(employee.workTeacherTasks());
    }
}
// Example usage
var student1 = new StudentClass({ firstName: "Alice", lastName: "Smith" });
// Example usage
executeWork(createEmployee(200)); // Output: "Getting to work"
executeWork(createEmployee(1000)); // Output: "Getting to director tasks"
// Display Teacher objects
console.log(printTeacher("John", "Doe")); // Output: "J. Doe"
console.log(printTeacher("Jane", "Smith")); // Output: "J. Smith"
console.log(student1.workOnHomework()); // Output: "Currently working"
console.log(student1.displayName());
console.log(createEmployee(200)); // Teacher
console.log(createEmployee(1000)); // Director
console.log(createEmployee('$500')); // Director
