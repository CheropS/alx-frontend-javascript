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

// Display Teacher objects
console.log(teacher1);
console.log(teacher2);
