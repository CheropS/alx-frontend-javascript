// Define the Teacher interface
interface Teacher {
    readonly firstName: string;  // Can only be set during initialization
    readonly lastName: string;   // Can only be set during initialization
    fullTimeEmployee: boolean;   // Must always be defined
    yearsOfExperience?: number;  // Optional property
    location: string;            // Must always be defined
    [key: string]: any;          // Allow additional properties like "contract"
}

// Creating instances of Teacher
const teacher1: Teacher = {
    firstName: "Alice",
    lastName: "Johnson",
    fullTimeEmployee: true,
    yearsOfExperience: 10,
    location: "New York",
    contract: true  // Additional custom attribute
};

const teacher2: Teacher = {
    firstName: "Bob",
    lastName: "Smith",
    fullTimeEmployee: false,
    location: "California",
    contract: false  // Additional custom attribute
};
// Extend Teacher to create Directors interface
interface Directors extends Teacher {
    numberOfReports: number;  // Mandatory attribute
}

// Create a Director object
const director1: Directors = {
    firstName: "John",
    lastName: "Doe",
    location: "London",
    fullTimeEmployee: true,
    numberOfReports: 17
};

// Define an interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Define an interface for the constructor
interface StudentConstructor {
    firstName: string;
    lastName: string;
}
// Define an interface for the StudentClass
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

// Implement the StudentClass
class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor({ firstName, lastName }: StudentConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}
// Example usage
const student1 = new StudentClass({ firstName: "Alice", lastName: "Smith" });

// Display Teacher objects
console.log(teacher1);
console.log(teacher2);
console.log(director1);
console.log(printTeacher("John", "Doe"));  // Output: "J. Doe"
console.log(printTeacher("Jane", "Smith"));  // Output: "J. Smith"
console.log(student1.workOnHomework());  // Output: "Currently working"
console.log(student1.displayName());  

