// Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// two student objects
const student1: Student = {
    firstName: "Alice",
    lastName: "Maina",
    age: 27,
    location: "Nairobi"
};

const student2: Student = {
    firstName: "Bob",
    lastName: "Kiprop",
    age: 24,
    location: "Eldoret"
};

// Storing the students in an array
const studentsList: Student[] = [student1, student2];

// Function to render the table using Vanilla JavaScript
function renderTable(students: Student[]): void {
    // Create table elements
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");

    // Add table headers
    const header1 = document.createElement("th");
    header1.textContent = "First Name";
    const header2 = document.createElement("th");
    header2.textContent = "Location";

    headerRow.appendChild(header1);
    headerRow.appendChild(header2);
    table.appendChild(headerRow);

    // Append student data rows
    students.forEach(student => {
        const row = document.createElement("tr");
        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.firstName;
        const locationCell = document.createElement("td");
        locationCell.textContent = student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        table.appendChild(row);
    });

    // Append table to the document body
    document.body.appendChild(table);
}

// Call the function to render the table
renderTable(studentsList);
