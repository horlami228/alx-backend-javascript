interface Student {
  firstName: string;
  lastname: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastname: 'Doe',
  age: 25,
  location: 'New York'
}

const student2: Student = {
  firstName: 'Simion',
  lastname: 'James',
  age: 20,
  location: 'San Fransisco'

}

const studentsList: Student[] = [student1, student2]

// Render table using Vanilla JavaScript
const table = document.createElement('table');
const headerRow = table.insertRow(0);

// Add header cells
const headerCell1 = headerRow.insertCell(0);
headerCell1.textContent = 'First Name';

const headerCell2 = headerRow.insertCell(1);
headerCell2.textContent = 'Location';

// Add rows for each student
studentsList.forEach((student, index) => {
  const row = table.insertRow(index + 1);

  // Add cells with student information
  const cell1 = row.insertCell(0);
  cell1.textContent = student.firstName;

  const cell2 = row.insertCell(1);
  cell2.textContent = student.location;
});

// Append the table to the document body
document.body.appendChild(table);