// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Main array to store employees
let employees = [];

// Collect employee data
const collectEmployees = function () {
  let empAdd = true;
  while (empAdd) {
    const firstName = prompt("Enter first name for employee:");
    if (!firstName) break;

    const lastName = prompt("Enter last name for employee:");
    if (!lastName) break;

    const salaryInput = prompt("Enter salary for employee:");
    if (!salaryInput) break;

    const salary = parseFloat(salaryInput);
    if (isNaN(salary)) {
      alert("Invalid salary entered. Please try again.");
      continue;
    }

    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };

    employees.push(employee);
    empAdd = confirm("Do you want to add another employee?");
  }
  trackEmployeeData();
  return employees;
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  if (employeesArray.length === 0) return;

  const totalSalary = employeesArray.reduce((sum, employee) => sum + employee.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;

  console.log(`Average Salary: ${averageSalary.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  })}`);
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  if (employeesArray.length === 0) return;

  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}, Salary: ${randomEmployee.salary.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  })}`);
}
// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table body
  const employeeTableBody = document.querySelector('#employee-table');

  // Clear the employee table body
  employeeTableBody.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  employeesArray.forEach(employee => {
    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = employee.firstName;
    newTableRow.appendChild(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = employee.lastName;
    newTableRow.appendChild(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = employee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
    newTableRow.appendChild(salaryCell);

    employeeTableBody.appendChild(newTableRow);
  });
}

const trackEmployeeData = function () {
  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort((a, b) => {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', collectEmployees);
