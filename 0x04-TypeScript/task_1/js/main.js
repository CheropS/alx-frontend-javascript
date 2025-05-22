// Creating instances of Teacher
var teacher1 = {
    firstName: "Alice",
    lastName: "Johnson",
    fullTimeEmployee: true,
    yearsOfExperience: 10,
    location: "New York",
    contract: true // Additional custom attribute
};
var teacher2 = {
    firstName: "Bob",
    lastName: "Smith",
    fullTimeEmployee: false,
    location: "California",
    contract: false // Additional custom attribute
};
// Create a Director object
var director1 = {
    firstName: "John",
    lastName: "Doe",
    location: "London",
    fullTimeEmployee: true,
    numberOfReports: 17
};
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
// Example usage
var student1 = new StudentClass({ firstName: "Alice", lastName: "Smith" });
// Display Teacher objects
console.log(teacher1);
console.log(teacher2);
console.log(director1);
console.log(printTeacher("John", "Doe")); // Output: "J. Doe"
console.log(printTeacher("Jane", "Smith")); // Output: "J. Smith"
console.log(student1.workOnHomework()); // Output: "Currently working"
console.log(student1.displayName());
