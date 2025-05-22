// Define the Teacher interface
interface Teacher {
    readonly firstName: string;  // Can only be set during initialization
    readonly lastName: string;   // Can only be set during initialization
    fullTimeEmployee: boolean;   // Must always be defined
    yearsOfExperience?: number;  // Optional property
    location: string;            // Must always be defined
    [key: string]: any;          // Allow additional properties like "contract"
}

// Extend Teacher to create Directors interface
interface Directors extends Teacher {
    numberOfReports: number;  // Mandatory attribute
}

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
// Define the DirectorInterface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// Define the TeacherInterface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Implement the Director class
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}
// Implement the Teacher class
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

// Function to create an Employee instance
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}
// Type predicate function to check if an employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
}

// Function to execute the correct work method
function executeWork(employee: Director | Teacher): void {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    } else {
        console.log(employee.workTeacherTasks());
    }
}

// Example usage
const student1 = new StudentClass({ firstName: "Alice", lastName: "Smith" });
// Example usage
executeWork(createEmployee(200));  // Output: "Getting to work"
executeWork(createEmployee(1000)); // Output: "Getting to director tasks"

// Display Teacher objects
console.log(printTeacher("John", "Doe"));  // Output: "J. Doe"
console.log(printTeacher("Jane", "Smith"));  // Output: "J. Smith"
console.log(student1.workOnHomework());  // Output: "Currently working"
console.log(student1.displayName());  
console.log(createEmployee(200));  // Teacher
console.log(createEmployee(1000)); // Director
console.log(createEmployee('$500'));// Director

